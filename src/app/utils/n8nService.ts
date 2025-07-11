/**
 * n8nService.ts
 * -------------
 * ไฟล์นี้จัดการการเชื่อมต่อและการส่งข้อมูลระหว่างแอพ JoyTrip และ n8n automation platform
 * รองรับการส่งข้อความจากผู้ใช้ไปยัง n8n และประมวลผลการตอบกลับในหลายรูปแบบ
 * 
 * @author JoyTrip Team
 * @version 1.0
 */

export interface WeatherInfo {
  location: string;
  temperature: number;
  condition: string;
  icon?: string;
}

export interface MessageResponse {
  text: string;
  weather?: WeatherInfo;
}

// URL ของ webhook บน n8n - ใช้เพื่อส่งข้อความและรับการตอบกลับ
const N8N_WEBHOOK_URL = 'https://joytrip2.app.n8n.cloud/webhook/2e3f1d63-42be-4c89-ae64-fd3cb2cfb9cf';

// ตัวแปรควบคุมการใช้งานโหมดจำลองสำหรับทดสอบ
const USE_MOCK_MODE = false;

// ข้อมูลจำลองสำหรับโหมดทดสอบ
const mockResponses: Record<string, MessageResponse> = {
  default: {
    text: 'ฉันเป็น AI ผู้ช่วยการท่องเที่ยวของคุณ และพร้อมช่วยวางแผนการเดินทางให้คุณ',
  },
  weather: {
    text: 'ขณะนี้สภาพอากาศในกรุงเทพฯ ร้อนมาก ไม่เหมาะกับการท่องเที่ยวกลางแจ้ง แนะนำให้เที่ยวในห้างสรรพสินค้าหรือพิพิธภัณฑ์',
    weather: {
      location: 'กรุงเทพมหานคร',
      temperature: 32,
      condition: 'แดดจัด',
    },
  },
  hotel: {
    text: 'ฉันแนะนำโรงแรมในย่านสุขุมวิทที่เดินทางสะดวก ใกล้รถไฟฟ้า BTS และมีร้านอาหารดีๆ มากมายในบริเวณนั้น',
  },
  food: {
    text: 'อาหารไทยที่คุณไม่ควรพลาดเมื่อมาเที่ยวประเทศไทย ได้แก่ ต้มยำกุ้ง ผัดไทย ส้มตำ และมัสมั่น ซึ่งเคยติดอันดับอาหารอร่อยที่สุดในโลก',
  },
  temple: {
    text: 'วัดที่มีชื่อเสียงในกรุงเทพฯ ได้แก่ วัดพระแก้ว วัดอรุณ และวัดพระเชตุพนฯ (วัดโพธิ์) ซึ่งทั้งหมดอยู่ในเขตพระนคร สามารถเดินทางต่อเนื่องกันได้',
  },
};

export const sendMessageToN8n = async (message: string): Promise<MessageResponse> => {
  if (USE_MOCK_MODE) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const lowercaseMessage = message.toLowerCase();
    if (lowercaseMessage.includes('อากาศ') || lowercaseMessage.includes('weather')) {
      return mockResponses.weather;
    } else if (lowercaseMessage.includes('โรงแรม') || lowercaseMessage.includes('hotel')) {
      return mockResponses.hotel;
    } else if (lowercaseMessage.includes('อาหาร') || lowercaseMessage.includes('food')) {
      return mockResponses.food;
    } else if (lowercaseMessage.includes('วัด') || lowercaseMessage.includes('temple')) {
      return mockResponses.temple;
    } else {
      return mockResponses.default;
    }
  }

  try {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = 'joytrip-user-session-' + new Date().getTime();
      localStorage.setItem('sessionId', sessionId);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        timestamp: new Date().toISOString(),
        sessionId,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const contentType = response.headers.get('content-type');
    let data;

    try {
      if (contentType && contentType.includes('application/json')) {
        try {
          data = await response.json();
        } catch (jsonError) {
          console.error('JSON parsing error:', jsonError);
          const textResponse = await response.clone().text();
          data = textResponse?.trim() ? textResponse : { text: 'ไม่มีคำตอบจากเซิร์ฟเวอร์ โปรดลองอีกครั้งภายหลัง' };
        }
      } else {
        const textData = await response.text();
        data = textData?.trim()
          ? (() => {
              try {
                return JSON.parse(textData);
              } catch {
                return textData;
              }
            })()
          : { text: 'ไม่มีคำตอบจากเซิร์ฟเวอร์ กรุณาลองอีกครั้ง' };
      }
    } catch (error) {
      console.error('Error processing response:', error);
      data = { text: 'เกิดข้อผิดพลาดในการประมวลผลคำตอบ' };
    }

    let messageText = 'ไม่สามารถประมวลผลคำตอบได้';
    let weatherData = undefined;

    if (typeof data === 'object') {
      if (data.output && typeof data.output === 'string') {
        messageText = data.output;
      } else if (typeof data.text === 'string') {
        messageText = data.text;
        weatherData = data.weather;
      } else if (typeof data.message === 'string') {
        messageText = data.message;
      } else if (data.response && typeof data.response.text === 'string') {
        messageText = data.response.text;
        weatherData = data.response.weather;
      } else if (data.content && typeof data.content === 'string') {
        messageText = data.content;
      } else if (data.result && typeof data.result === 'string') {
        messageText = data.result;
      } else if (data.error && typeof data.error === 'string') {
        messageText = `เกิดข้อผิดพลาด: ${data.error}`;
      }
    } else if (typeof data === 'string') {
      messageText = data.trim();
    }

    return {
      text: messageText,
      weather: weatherData,
    };
  } catch (error) {
    console.error('Error sending message to n8n:', error);
    const lowercaseMessage = message.toLowerCase();
    if (lowercaseMessage.includes('อากาศ') || lowercaseMessage.includes('weather')) {
      return mockResponses.weather;
    } else {
      return {
        text: 'ขออภัย ฉันไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ในขณะนี้ กำลังทำงานในโหมดออฟไลน์ คุณสามารถถามคำถามพื้นฐานได้',
      };
    }
  }
};
