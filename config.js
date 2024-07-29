const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://chukwujamaizuchukwu760:SxoVwj8B4bljKCN5@cluster0.4mriaqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9129250691";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_05_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk5LFxuICAgICAgICA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMixcbiAgICAgICAgMTcyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQxLFxuICAgICAgICA3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDczLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU3LFxuICAgICAgICA1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzVHM0Z09CUll5MGl5UnZPVnc0SmJlWkQ4blRRaEdMZy92NlFWMjN5bm0wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDZU9xenZzcFF2U1pxTXVtcWE4V0hnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk2NjhkNjk4LWNiMWMtNDUyOC05NGFmLWViZGYxOTI4ZWU3MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDE5OSxcbiAgICAgIDE1MCxcbiAgICAgIDEyMixcbiAgICAgIDExNSxcbiAgICAgIDExLFxuICAgICAgMTc1LFxuICAgICAgMjYsXG4gICAgICA2MyxcbiAgICAgIDE5MSxcbiAgICAgIDcyLFxuICAgICAgMTM2LFxuICAgICAgMTg1LFxuICAgICAgMTMwLFxuICAgICAgMTIsXG4gICAgICA2LFxuICAgICAgMTEsXG4gICAgICAyNTAsXG4gICAgICAxMDMsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICA3NixcbiAgICAgIDY5LFxuICAgICAgMTY3LFxuICAgICAgMjIwLFxuICAgICAgMTYxLFxuICAgICAgMjMxLFxuICAgICAgOTAsXG4gICAgICAxMyxcbiAgICAgIDEzNyxcbiAgICAgIDE4OCxcbiAgICAgIDIyNixcbiAgICAgIDgxLFxuICAgICAgNDEsXG4gICAgICAyMTgsXG4gICAgICAyNDEsXG4gICAgICAxMzQsXG4gICAgICAxNjgsXG4gICAgICAxNzYsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFFCSDJHQUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjkyNTA2OTE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1hbm55XCIsXG4gICAgXCJsaWRcIjogXCI3NDkzOTA1OTE1OTA5Njo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vdzd1UUhFT0t6bjdVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM2N6cHphajNSSlYzVG5jdGJKdmdPM0xQSVZYUjNsV1BaV3hOV0NycU1ETT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2SlFxZHgyYWJlMWhDdHhoTGNWdytjK1lmQVBYTjczNTFsY3YyemNWcElmN2cyZzB3QkV4VWdjZ2NvV2VhcFlmUlFqaVMrUXl4NmQ5Tm5OdkxDU0RCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoZTgyTUwzZ2xVV1dMSzh5N0piZFg2Q1NibTk5UTVsWlFQVU5wQXVPUVdDSmQzOEtUcElUTFU5ejhMVklQYWg5MFhqS09LQ2wveUhOTEhXZE04RCtDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI5MjUwNjkxOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNzYzMjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEdDZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUR0Ni5qc29uIjogIntcImtleURhdGFcIjpcInM1bWo1RHNheGdDczFhRkJjdmt5MXk0N0lnMDNnVWNjLytBY3lySkp5Ukk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA5MDU4MDA3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMDM4MzAyNzA3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "who needs a reason for betrayal 🫀 💔 😪" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "C_J",
  ownername:process.env.OWNER_NAME|| "manny",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
