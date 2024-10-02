# Photocrypt - Revolutionizing Account Security 🔐

## A picture can tell a thousand words, but what about a password? 🤔  


---

## Inspiration 💡
Passwords are relics of a time before the internet and cybersecurity. **Photocrypt** was inspired by the flaws in traditional password systems—**predictability, vulnerability, and forgetfulness**. Hackers easily exploit weak passwords, and most people can't even recall their first password. It's time for a better solution.

---

## My Solution ⚙️
**Photocrypt** replaces outdated passwords with image-based encryption. By uploading an image—whether from a local file or a URL—users generate a secure, unique passcode. **SHA-256 encryption**, the same standard used in **Bitcoin and Ethereum**, ensures that each image results in a distinct passcode, with even the slightest change in the image creating an entirely different passcode.

The generated passcode can be customized to fit website-specific password criteria, such as including special characters or adjusting the length, making it a flexible and powerful solution for the modern digital world.

---

## How I Built It 🛠️
The **Photocrypt** Chrome extension operates through a streamlined process:
1. **Input**: Users upload an image or provide a URL.
2. **Processing**: The image is converted into a Uint8 array representing its pixel data.
3. **Encryption**: A Flask API processes the image data, converting it to an ASCII string and encrypting it using **SHA-256**.
4. **Customization**: The encrypted passcode is formatted to meet website-specific password validation requirements.

Additionally, I built a **Flask web application** with a **MongoDB database** to store user data and showcase the technology.

---

## Challenges I Encountered 🚧
Since I had never worked with **Chrome extensions** before, and my experience with **Flask** was limited, it was a steep learning curve. Coordinating tasks and ensuring smooth communication, especially with time zone differences, was also a challenge.

---

## Accomplishments 🌟
I successfully:
- Implemented the **file upload feature** in the Chrome extension, a technically challenging milestone.
- Overcame the steep learning curve in Chrome extension development and Flask API integration.

---

## What I Learned 📖
- **Chrome extension development**: I learned how to create a functional and user-friendly Chrome extension.
- **API development**: I built a RESTful API using Flask to handle image processing and encryption.
- **MongoDB**: This project introduced me to NoSQL databases, specifically MongoDB, for storing and managing user data.
- **Encryption techniques**: I deepened my knowledge of encryption, especially **SHA-256**, which is crucial in blockchain and cybersecurity technologies.

---

## What's Next for Photocrypt 🚀
The possibilities for **Photocrypt** are vast. Next steps include expanding its application to other forms of media, such as **video encryption**. I also aim to increase its compatibility with more websites and explore potential integrations with online payment platforms. **The future of account security lies in Photocrypt.**

---
