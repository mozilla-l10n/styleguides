# Style Guide Vietnamese (vi)

## Chú ý khi dịch

### Chú ý chung

* Áp dụng tất cả các chú ý của [Style Guide chính thức của Mozilla](https://developer.mozilla.org/en-US/docs/L10n_Style_Guide)
* Sử dụng từ vựng phổ thông. Cố giữ cho chuỗi dịch ngắn, xúc tích nhưng không cụt, bất lịch sự.
* Khi gặp chuỗi phức tạp, cảm thấy tự mình khó có thể dịch đúng thì KHÔNG ĐƯỢC DỊCH. Hãy nhờ một người có kinh nghiệm hơn hoặc hỏi trên mailing list.
* Thận trọng khi sử dụng số nhiều. VD: "Settings" dịch là "Thiết lập" chứ không phải "Những thiết lập" hay "Các thiết lập".
* Cố gắng chuyển câu bị động tiếng Anh thành câu chủ động tiếng Việt.
* Các dấu câu (chấm, phẩy, hai chấm,...) đặt sát với từ đứng trước và đi kèm một dấu cách, trừ khi là dấu chấm hết đoạn.
* Dấu ba chấm là một ký tự ([ellipsis](http://en.wikipedia.org/wiki/Ellipsis), mã Unicode U+2026), không phải 3 dấu chấm. Nếu dịch bằng Locamotion (chạy Pootle) thì dịch vụ sẽ tô hình chữ nhật quanh dấu ba chấm ở dòng tiếng Anh. Chỉ cần ấn vào hình chữ nhật đó thì nó sẽ được copy sang dòng tiếng Việt.
* Tránh Viết Hoa Kiểu Title Tiếng Anh. Dịch "System Settings" là "Thiết lập hệ thống" chứ không phải "Thiết lập Hệ thống" hay "Thiết Lập Hệ Thống".
* Những chuỗi chứa ký tự đặc biệt như {{name}} hay %B là chuỗi template. Các ký tự đặc biệt sẽ được thay thế bằng nội dung khác bởi code. Không dịch ký tự đặc biệt (VD: {{tên}} là sai). Với những chuỗi liên quan đến ngày tháng thì cần xem tài liệu của hàm [strftime](http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html) để dịch đúng cách dùng của người Việt.

### Thuật ngữ

* add-on: tiện ích
* sidebar: thanh lề
* blog: nhật ký (hoặc có thể không dịch tùy trường hợp)
* bookmark: trang đánh dấu (hoặc "đánh dấu trang" nếu là động từ)
  * ("Di sản" của Netscape. "Trang ưa thích" có nghĩa "favorite" của IE.)
* cancel: hủy
  * (ngắn hơn "hủy bỏ")
  * Trên desktop có đủ khoảng cách để viết "hủy bỏ" đầy đủ. Có lẽ chỉ cần viết tắt "hủy" trên di động phải không? – [Minh Nguyễn](https://wiki.mozilla.org/User:Minh_Nguyen) ([talk](https://wiki.mozilla.org/index.php?title=User_talk:Minh_Nguyen&action=edit&redlink=1), [contribs](https://wiki.mozilla.org/Special:Contributions/Minh_Nguyen)) 23:53, 18 February 2014 (PST)
* clipboard: bảng tạm
* console: bảng điều khiển
* done: hoàn tất
  * (ngắn hơn "hoàn thành" và lịch sự hơn "xong")
* extension: phần mở rộng
* OK: OK
* Please ...: Vui lòng ...
  * (không dùng "Làm ơn ..." hay "Xin hãy ...")
* plugin: phần bổ trợ
* tab: thẻ
* tag: nhãn
* theme: diện mạo
* Whoops: whoops
* Cookie: không dịch
* Ad-free: không có quảng cáo

### Chú ý riêng với Firefox OS

* Hướng dẫn Flash thiết bị với các ngôn ngữ: [https://l10n.etherpad.mozilla.org/gaia-multilocale](https://l10n.etherpad.mozilla.org/gaia-multilocale)?
* Gaia là tên mã của giao diện FxOS, những app có tên kiểu dạng "Gaia SMS" thì giữ nguyên tên như app bình thường và thêm Gaia đằng sau. VD: "Tin nhắn Gaia".
* Firefox OS hỗ trợ nhiều SIM, những string kiểu "SIM {{n}} PIN" dịch thành "Mã PIN của SIM {{n}}".
* Không dịch các phần trong Developer Menu vì vừa khó dịch chính xác vừa gây cản trở cho lập trình viên khi tham khảo các tài liệu trên Wiki của Mozilla.
* Có thể dùng chuỗi "ứng dụng này" thay thế cho tên thật của ứng dụng trong chuỗi dịch. VD: "Insert SIM card to use Usage" dịch thành "Cắm SIM để sử dụng ứng dụng này" (tên ứng dụng là Usage).

### Tên các ứng dụng đi kèm mặc định

* Bluetooth (bluetooth): Bluetooth
* Browser (browser): Trình duyệt
* Camera (camera): Máy ảnh
* Calendar (calendar): Lịch
* Clock (clock): Đồng hồ
* Email (email): Thư điện tử
* First Time Use (ftu): Lần sử dụng đầu tiên
* FM Radio (fm): Đài FM
* Homescreen (homescreen): Màn hình chính
* Gallery (gallery): Kho ảnh
* Marketplace: Kho ứng dụng
* Music (music): Âm nhạc
* Settings (settings): Thiết lập
* SMS (sms): Nhắn tin
* Usage (costcontrol): Lưu lượng
  * (lưu lượng sử dụng mạng Internet)
* Video (video): Video
* Wallpaper (wallpaper): Ảnh nền

### Thuật ngữ

Các thuật ngữ gặp riêng trong ngữ cảnh của Firefox OS.

**TODO:** Di chuyển tới một trang riêng.

* bookmark: ứng dụng web
  * (FxOS có dạng ứng dụng thực chất là một trang web ở server nào đó, đánh dấu trang thành biểu tượng trên màn hình chính và coi như một ứng dụng bình thường)
* download: tải về
  * (ngắn hơn 'tải xuống')
* Home button: nút Home
* home screen: màn hình chính
* memory card is in use: thẻ nhớ đang bận
  * (khi cắm phone vào máy tính thì máy tính sử dụng thẻ nhớ của phone; không dịch là "đang được dùng" vì lúc nào thẻ nhớ cũng được dùng, gây khó hiểu)
* scan network: tìm [kiếm] mạng (Wi-Fi)
* song: bản nhạc
  * (không dịch là "bài hát" vì có cả nhạc không lời)
* swipe: vuốt
* tap: chạm
* track: xem song
