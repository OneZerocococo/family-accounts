// src/liffInit.js
import liff from '@line/liff';

const liffId = import.meta.env.VITE_LIFF_ID
export const initializeLiff = async () => {
  try {
    await liff.init({ liffId });
    console.log('LIFF initialized');

    if (!liff.isLoggedIn()) {
      liff.login();
    }
  } catch (error) {
    console.error('Error initializing LIFF:', error);
  }
};

export const sendMessage = async (transaction) => {
  try {
    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
      await liff.sendMessages([{
        "type": "flex",
        "altText": "我新增了一筆紀錄",
        "contents": 
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "有一筆新紀錄",
                "weight": "bold",
                "color": "#1DB446",
                "size": "sm"
              },
              {
                "type": "text",
                "text": transaction.description,
                "weight": "bold",
                "size": "xxl",
                "margin": "md"
              },
              {
                "type": "text",
                "text": `$ ${transaction.amount}`,
                "size": "xxl",
                "align": "end",
                "color": "#DC143C"
              },
              {
                "type": "separator",
                "margin": "md"
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "查看詳細",
                  "uri": `${import.meta.env.VITE_APP_URL}/accounts/${transaction.groupId}`
                }
              }
            ]
          }
        }
      }
      ]);
      console.log('Message sent');
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export const getUserProfile = async () => {
  try {
    const profile = await liff.getProfile();
    return profile;
  } catch (error) {
    console.error('Error getting profile:', error);
  }
};