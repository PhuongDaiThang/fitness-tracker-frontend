# Fitness Tracker - Front-End

## Giới thiệu

Fitness Tracker là một ứng dụng giúp người dùng theo dõi hoạt động thể dục và thiết lập các mục tiêu sức khỏe. Phần Front-End của ứng dụng được phát triển bằng ReactJS và sử dụng các công nghệ web tiêu chuẩn như HTML, CSS, và JavaScript.

## Công Nghệ Sử Dụng

- **ReactJS**: Thư viện JavaScript để xây dựng giao diện người dùng.
- **HTML**: Đánh dấu cấu trúc của ứng dụng.
- **CSS**: Định kiểu và thiết kế giao diện người dùng.
- **JavaScript**: Ngôn ngữ lập trình để xử lý logic và tương tác.

## Cấu Trúc Dự Án
```
fitness-tracker/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Dashboard.js
│   │   ├── ActivityList.js
│   │   ├── AddActivityForm.js
│   │   ├── GoalList.js
│   │   ├── AddGoalForm.js
│   │   └── LoginForm.js
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── Dashboard.css
│   │   ├── ActivityList.css
│   │   ├── AddActivityForm.css
│   │   ├── GoalList.css
│   │   ├── AddGoalForm.css
│   │   └── LoginForm.css
│   ├── api/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── package-lock.json
````

### Cài Đặt

Để chạy ứng dụng Front-End, bạn cần cài đặt các phụ thuộc của dự án. Thực hiện các bước sau:

1. **Clone repository**

   ```bash
   git clone https://github.com/PhuongDaiThang/fitness-tracker-frontend.git
   cd fitness-tracker
   ```
2. **Cài đặt các phụ thuộc**
   ```bash
   npm install
   ```
## Chạy Ứng Dụng
   ```bash
   npm start
   ```
Ứng dụng sẽ được chạy trên http://localhost:3000 và sẽ tự động mở trình duyệt web với địa chỉ này.

## Thư mục
- **components/**: Chứa các thành phần React chính của ứng dụng.
- **styles/**: Chứa các tệp CSS để định kiểu cho các thành phần.
- **api/**: Chứa các hàm gọi API để giao tiếp với back-end.
- **App.js**: Thành phần gốc của ứng dụng.
- **index.js**: Điểm vào của ứng dụng, nơi React được render vào DOM.
   

