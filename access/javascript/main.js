// show login form onclick
function showLoginFormFnc() {
  document.getElementById("modal-id").classList.add("show-component");
  document.getElementById("login-form-id").classList.add("show-component");
}

// hide login form onclick
function hideLoginFormFnc() {
  document.getElementById("modal-id").classList.remove("show-component");
  document.getElementById("login-form-id").classList.remove("show-component");
}

// show register form onclick
function showRegisterFormFnc() {
  document.getElementById("modal-id").classList.add("show-component");
  document.getElementById("register-form-id").classList.add("show-component");
}

// hide register form onclick
function hideRegisterFormFnc() {
  document.getElementById("modal-id").classList.remove("show-component");
  document.getElementById("register-form-id").classList.remove("show-component");
}

function exitCheckOutFormFNC() {
  document.getElementById("modal-id").classList.remove("show-component");
  document.getElementById("form-checkout").classList.remove("cart__display");
}

function setProductType(typeID, type) {
  this.typeID = typeID;
  this.type = type;
}

function setProductItem(typeID, productID, name, price, sale, img, detail) {
  this.typeID = typeID;
  this.productID = productID;
  this.name = name;
  this.price = price;
  this.sale = sale;
  this.img = img;
  this.detail = detail;
}

function setCartItem(cartID, product) {
  this.cartID = cartID;
  this.product = product;
}

// type list

function createType() {
  var arrType = [new setProductType("all", "Tất cả"), new setProductType("nike-id", "Nike"), new setProductType("adidas", "Adidas"), new setProductType("fila", "Fila"), new setProductType("champion", "Champion")];
  if (localStorage.getItem("listype") == null) {
    localStorage.setItem("listype", JSON.stringify(arrType));
  }
}

var arrProduct = [];

function createProduct() {
  arrProduct = [
    new setProductItem("nike-id", "nike-001", "Short-Sleeve Basketball T-Shirt", "650000", "100", "nike-001.jpg", "Số hóa để tiếp thêm sinh lực. Chiếc áo phông Swoosh này của Nike Basketball mô phỏng lại biểu tượng mang tính biểu tượng như một đồ họa trò chơi điện tử kiểu cũ."),
    new setProductItem("nike-id", "nike-002", "Skate T-Shirt", "650000", "100", "nike-002.jpg", "Firry the Tree đã tạm dừng lời cảnh giác êm đềm của mình trên khung cảnh tuyết để có thể tham gia cổ vũ lễ hội của bạn."),
    new setProductItem(
      "nike-id",
      "nike-003",
      "LeBron x Space Jam: A New Legacy",
      "1100000",
      "100",
      "nike-003.jpg",
      "Đó là LeBron và nhóm của anh ấy gồm những Giai điệu khôn ngoan chiến đấu chống lại lũ Goons phản diện. Chiếc áo phông LeBron x Space Jam: A New Legacy Basketball T-Shirt vừa vặn, rộng rãi, hoàn toàn bằng vải bông có một số chi tiết hoạt hình thú vị từ bộ phim bom tấn bóng rổ mới."
    ),
    new setProductItem("nike-id", "nike-004", "Jordan Brand Festive", "800000", "100", "nike-004.jpg", "Chiếc áo phông Lễ hội của Thương hiệu Jordan sử dụng chất liệu cotton mềm mại, thoải mái với phom dáng rộng rãi, thoải mái."),
    new setProductItem("nike-id", "nike-005", "Lil' Penny", "650000", "100", "nike-005.jpg", "Nike Basketball có một bộ sưu tập quần áo mới lấy cảm hứng từ quảng cáo vui nhộn của Lil 'Penny ngày trước và đây là chiếc áo phông phù hợp."),
    new setProductItem("nike-id", "nike-006", "Jordan Sport DNA", "1000000", "100", "nike-006.jpg", "Jordan Sport DNA T-Shirt là loại áo dài tay hàng ngày được làm từ chất liệu cotton mềm mại, thoải mái. Hình họa lớn ở mặt sau có đường viền trên các hàng rào liên kết chuỗi từ các sân ngoài trời."),
    new setProductItem("nike-id", "nike-007", "Sportswear Max90", "900000", "100", "nike-007.jpg", "Áo thun thể thao Nike Max90 mang đến cho bạn sự thoải mái. Tay áo dài hơn và độ rộng vừa vặn qua cơ thể và hông mang đến cho chiếc áo thun Max90 này một dáng vẻ thoải mái và giản dị."),
    new setProductItem(
      "nike-id",
      "nike-008",
      "Dri-FIT",
      "900000",
      "100",
      "nike-008.jpg",
      "Tốc độ về đích trong Nike Dri-FIT ADV Team USA AeroSwift Vest, thiết kế mượt mà, tinh giản mang lại cảm giác như làn da thứ hai và khả năng thở giúp bạn đạt được phong độ tốt nhất. Nó tôn vinh Đội Mỹ khi họ sống trong giấc mơ của mình trên đấu trường thế giới."
    ),
    new setProductItem(
      "nike-id",
      "nike-009",
      "Sportswear Be True",
      "900000",
      "100",
      "nike-009.jpg",
      "Hãy tôn vinh niềm tự hào về chiếc áo thun thể thao Be True của Nike. Được làm từ chất liệu cotton mềm mại, nó là sản phẩm hoàn hảo để mặc hàng ngày. Swoosh cầu vồng và các chi tiết đầy màu sắc tôn vinh cộng đồng LGBTQIA + trên toàn thế giới."
    ),
    new setProductItem("nike-id", "nike-010", "Dri-FIT Nathan Bell", "800000", "100", "nike-010.jpg", "Nike Dri-FIT Nathan Bell T-Shirt là một phần của sự hợp tác với nghệ sĩ Nathan Bell, tôn vinh việc chạy bộ như một cuộc thi với chính bạn."),
    new setProductItem(
      "adidas",
      "adidas-001",
      "Adicolor Classics Trefoil Hoodie",
      "1900000",
      "1000000",
      "adidas-001.jpg",
      "Kể từ khi Trefoil ra mắt vào những năm 70, nó đã được các vận động viên chuyên nghiệp, ngôi sao hip hop, nghệ sĩ và người sáng tạo đeo ở mọi nơi trên thế giới. Vì vậy, khi bạn mặc chiếc áo hoodie adidas này, bạn đang ở trong một công ty tốt. Thể hiện sự kết nối của bạn với di sản và luôn cảm thấy thoải mái trong bộ khăn choàng Pháp siêu sang trọng. Bằng cách mua các sản phẩm cotton từ chúng tôi, bạn đang hỗ trợ canh tác bông bền vững hơn."
    ),
    new setProductItem(
      "adidas",
      "adidas-002",
      "Adicolor Classics Trefoil Tee Green",
      "750000",
      "900",
      "adidas-002.jpg",
      "Logo Trefoil được ghi dấu trong lịch sử thể thao và phong cách. Nhưng nó còn hơn thế nữa. Nó đại diện cho một nghị lực không sợ hãi và một nhóm những người sáng tạo luôn nỗ lực hết mình ở mỗi bước."
    ),
    new setProductItem(
      "adidas",
      "adidas-003",
      "Graphics Trefoil Series",
      "1250000",
      "750000",
      "adidas-003.jpg",
      "Ra đời vào thập niên 70, đây ban đầu là biểu tượng của thể thao và rồi trở thành biểu trưng của tinh thần sáng tạo và cá tính độc đáo trên toàn thế giới. Hãy tự hào mang trên mình biểu tượng ấy với chiếc áo hoodie adidas này. Đồng thời tận hưởng cảm giác thư giãn và dễ chịu."
    ),
    new setProductItem(
      "adidas",
      "adidas-004",
      "Adicolor Classics 3-Stripes Tee	White",
      "750000",
      "1100",
      "adidas-004.jpg",
      "Chỉ vì bạn đang ở cùng nhóm của mình cả cuối tuần không có nghĩa là bạn sẽ bỏ qua phong cách. Hãy mặc chiếc áo phông adidas này và tạo nên cảm giác 3-Stripes đích thực. Dù bạn đến đâu trong ngày, hãy giữ nó bình dị và cổ điển."
    ),
    new setProductItem("adidas", "adidas-005", "Originals Trefoil Tee", "750000", "1200", "adidas-005.jpg", "Nguyên bản, luôn luôn. Chiếc áo thun adidas này cho bạn sự tự do để tôn lên vẻ ngoài của mình hoặc giữ cho nó thấp. Toàn bộ vấn đề là biến nó thành của bạn."),
    new setProductItem("adidas", "adidas-006", "R.Y.V. Loose Fit Hoodie", "1900000", "1300", "adidas-006.jpg", "Áo hoodie adidas tiện dụng này là một trong những trường hợp ít hơn nhiều. Nhiều cơ hội sáng tạo hơn. Thêm không gian để bạn di chuyển. Nhiều chỗ hơn để bộc lộ tiếng nói của chính bạn."),
    new setProductItem(
      "adidas",
      "adidas-007",
      "Adicolor Classics Trefoil Tee Black",
      "750000",
      "1400",
      "adidas-007.jpg",
      "Logo Trefoil được ghi dấu trong lịch sử thể thao và phong cách. Nhưng nó còn hơn thế nữa. Nó đại diện cho một nghị lực không sợ hãi và một nhóm những người sáng tạo luôn nỗ lực hết mình ở mỗi bước."
    ),
    new setProductItem(
      "adidas",
      "adidas-008",
      "Adicolor Classics Trefoil Tee White",
      "750000",
      "1500",
      "adidas-008.jpg",
      "Logo Trefoil được ghi dấu trong lịch sử thể thao và phong cách. Nhưng nó còn hơn thế nữa. Nó đại diện cho một nghị lực không sợ hãi và một nhóm những người sáng tạo luôn nỗ lực hết mình ở mỗi bước."
    ),
    new setProductItem(
      "adidas",
      "adidas-",
      "Adicolor Classics 3-Stripes Tee	Black",
      "750000",
      "1000",
      "adidas-009.jpg",
      "Chỉ vì bạn đang ở cùng nhóm của mình cả cuối tuần không có nghĩa là bạn sẽ bỏ qua phong cách. Hãy mặc chiếc áo phông adidas này và tạo nên cảm giác 3-Stripes đích thực. Dù bạn đến đâu trong ngày, hãy giữ nó bình dị và cổ điển."
    ),
    new setProductItem("adidas", "adidas-010", "Adicolor Classics Trefoil Crewneck Sweatshirt", "1600000", "1000", "adidas-010.jpg", "Một biểu tượng phong cách và thay đổi trò chơi kể từ năm 1972, nó nổi bật ở phía trước và chính giữa trên chiếc áo nỉ adidas này."),
    new setProductItem(
      "adidas",
      "adidas-011",
      "Adicolor Classics Back and Front Trefoil Boxy Tee",
      "900000",
      "100",
      "adidas-011.jpg",
      "Chơi các mục yêu thích, ngay cả với những điều cơ bản của bạn. Áo phông adidas này có tất cả các chi tiết chính. Logo Trefoil đặc trưng, ​​mặt trước và mặt sau. Comfy bông. Một số người gọi đó là lòng trung thành. Bạn nói rằng bạn biết một điều tốt khi bạn nhìn thấy nó."
    ),
    new setProductItem(
      "adidas",
      "adidas-012",
      "SPRT Allover Animal Print Football Tee",
      "1000000",
      "100",
      "adidas-012.jpg",
      "Tạo ấn tượng bắt đầu bằng việc tạo một lối vào. Hình in động vật tự tin của chiếc áo thun adidas này cho cả thế giới biết rằng bạn không ngại sống hết mình, quyết liệt là chính mình. Ngay cả khi điều đó có nghĩa là phải ồn ào một chút. Sản phẩm này được sản xuất với thành phần tái chế như một phần của tham vọng chấm dứt rác thải nhựa của chúng tôi."
    ),
    new setProductItem(
      "adidas",
      "adidas-013",
      "Camo Graphic Windbreaker",
      "2200000",
      "100",
      "adidas-013.jpg",
      "Có một điều như là quá nhiều camo? Không phải khi nói đến chiếc áo gió adidas này. In từ mui xe đến viền áo mang đến cho bạn một cái nhìn ấn tượng. Zip để thêm một lớp trước khi bạn đi ra ngoài trong ngày. Một lớp vừa vặn dễ dàng chỉ cần khoác ngoài vải kaki hoặc denim. Hoặc thực sự cam kết và mặc nó với quần rằn ri."
    ),
    new setProductItem("adidas", "adidas-014", "Jeremy Scott Full-Zip Hoodie", "2700000", "100", "adidas-014.jpg", "Hãy xem xét chiếc áo hoodie adidas x Jeremy Scott này là đồng phục mới của bạn. Một niềm vui nhỏ đi một chặng đường dài. Nó thoải mái và nổi bật với màu xanh đậm cho một tuyên bố bắt mắt."),
    new setProductItem(
      "adidas",
      "adidas-015",
      "Adicolor Classics Back and Front Trefoil Boxy Tee",
      "900000",
      "100",
      "adidas-015.jpg",
      "Chơi các mục yêu thích, ngay cả với những điều cơ bản của bạn. Áo phông adidas này có tất cả các chi tiết chính. Logo Trefoil đặc trưng, ​​mặt trước và mặt sau. Comfy bông. Một số người gọi đó là lòng trung thành. Bạn nói rằng bạn biết một điều tốt khi bạn nhìn thấy nó."
    ),
    new setProductItem(
      "adidas",
      "adidas-016",
      "Graphics Originals Attribute Pack Tee",
      "750000",
      "100",
      "adidas-016.jpg",
      "Cổ điển và đơn giản. Tươi và sạch sẽ. Chiếc áo thun này có những đường nét quen thuộc mà bạn từng biết, được nhấn nhá bằng hình họa tinh tế của adidas. Chất liệu cotton mềm mại khiến nó được yêu thích, và độ rộng rãi tạo cảm giác vừa vặn."
    ),
    new setProductItem(
      "adidas",
      "adidas-017",
      "Adicolor Shattered Trefoil Crewneck Sweatshirt",
      "1600000",
      "100",
      "adidas-017.jpg",
      "Được cắt nhỏ và tái tạo lại, biểu tượng Trefoil trên chiếc áo nỉ adidas này nổi bật với năng lượng hiện đại. Nhưng ngay cả với giao diện mới? Nó có cùng một ý nghĩa. Tính nguyên bản. Sáng tạo. Hai điều trở nên dễ dàng khi bạn được bọc trong lớp vải bông sang trọng của Pháp."
    ),
    new setProductItem(
      "adidas",
      "adidas-018",
      "Graphics Trefoil Series Tee",
      "750000",
      "100",
      "adidas-018.jpg",
      "Trở lại vấn đề cơ bản. Sự đơn giản của chiếc áo thun cổ thuyền này đã làm cho adidas Trefoil trở nên nổi bật. Mặc nó trên bất cứ thứ gì và mọi thứ. Chất liệu cotton mềm mại giúp bạn thoải mái khi mặc vừa vặn."
    ),
    new setProductItem("adidas", "adidas-019", "R.Y.V. Loose Fit Tee", "750000", "100", "adidas-019.jpg", "Là con người là duy nhất. Nhưng có thể cần can đảm để thể hiện bạn khác biệt như thế nào. Đường cắt cúp rộng rãi của chiếc áo thun adidas này giúp bạn có nhiều không gian để thể hiện bản thân."),
    new setProductItem(
      "adidas",
      "adidas-020",
      "Graphics Originals Attribute Pack Tee Black",
      "750000",
      "100",
      "adidas-020.jpg",
      "Cổ điển và đơn giản. Tươi và sạch sẽ. Chiếc áo thun này có những đường nét quen thuộc mà bạn từng biết, được nhấn nhá bằng hình họa tinh tế của adidas. Chất liệu cotton mềm mại khiến nó được yêu thích, và độ rộng rãi tạo cảm giác vừa vặn."
    ),
    new setProductItem("fila", "fila-001", "Grant Hill Cormac Tee", "700000", "100", "fila-001.jpg", "Chiếc áo phông này hoàn toàn nhằm tôn vinh một huyền thoại B-Ball. Có thiết kế thấp thực sự phù hợp với mọi phong cách. Mang tính biểu tượng trong 25 năm."),
    new setProductItem("fila", "fila-002", "Flynn Long Sleeve Tee", "1100000", "100", "fila-002.jpg", "Áo thun dài tay cổ điển dành cho tất cả mọi người. Cảm giác sang trọng, cái nhìn bình thường. Phòng chờ x FILA"),
    new setProductItem("fila", "fila-003", "Oliver Tee", "600000", "100", "fila-003.jpg", "Một món đồ cần thiết: chiếc áo thun cơ bản này được làm để mặc hàng ngày. Thương hiệu tinh tế dọc theo vai và tay áo. Mang tính biểu tượng ở mọi nơi."),
    new setProductItem("fila", "fila-004", "FILA X RB Babar Kurtt Tee", "1000000", "100", "fila-004.jpg", "Tee quần vợt độc đáo với hình minh họa ném ngược. Được thiết kế để bạn thoải mái di chuyển trong hoặc ngoài sân. Mang tính biểu tượng ở mọi nơi."),
    new setProductItem("fila", "fila-005", "Grant Hill X Sprite Tank", "1600000", "100", "fila-005.jpg", "Bây giờ đây là một cuộc hợp tác làm mới giữa hai huyền thoại. Một chiếc áo choàng độc nhất thật tuyệt vời khi ở trong và ngoài sân đấu. Mang tính biểu tượng ở mọi nơi."),
    new setProductItem("fila", "fila-006", "Martino Long Sleeve Tee", "900000", "100", "fila-006.jpg", "Một chiếc áo phông dài tay thoải mái với màu đen hoặc trắng cơ bản. Đi kèm với một logo FILA trang nhã ở phía trước. Mang tính biểu tượng ở mọi nơi."),
    new setProductItem("fila", "fila-007", "Jazam Long Sleeve Crew", "700000", "100", "fila-007.jpg", "Thoải mái là Chìa khóa & Chiếc áo thun dài tay này có được điều đó. Phòng chờ là IN vì vậy Bạn nên Phòng chờ trong Phong cách. Mang tính biểu tượng ở mọi nơi."),
    new setProductItem("fila", "fila-008", "Dover Tee", "700000", "100", "fila-008.jpg", "Áo sơ mi nam tay ngắn tee thiết kế colorblock. Kết hợp nó với mồ hôi, không ai mặc quần jean nữa."),
    new setProductItem("fila", "fila-009", "Deltalife Graphic Tee", "600000", "100", "fila-009.jpg", "Cung cấp sự thoải mái, phong cách và phù hợp. Giữ mọi thứ đơn giản để phù hợp với bất kỳ thời điểm nào. Phong cách siêu tân tinh cho sự sống trên Trái đất."),
    new setProductItem("fila", "fila-010", "Pietersite Tee", "700000", "100", "fila-010.jpg", "Phù hợp tươi với kiểu dáng cổ điển. Có vẻ tốt trong mọi tình huống. Mang tính biểu tượng ở mọi nơi."),
    new setProductItem("champion", "champion-001", "Organic Cotton Blend Small Script Logo T-Shirt", "800000", "100", "champion-001.jpg", "Là kiểu dáng cổ điển vượt thời gian, chiếc áo thun cổ thuyền này được làm thủ công từ bông hữu cơ và được nhấn nhá bằng biểu tượng kịch bản được thêu trên ngực."),
    new setProductItem("champion", "champion-002", "Organic Cotton Blend Small Script Logo Sweatshirt", "1500000", "100", "champion-002.jpg", "Thể thao logo kịch bản được thêu trên ngực, chiếc áo len pha vải bông hữu cơ này là một thiết bị cần thiết cho vẻ ngoài cổ điển với sự thoải mái cao cấp."),
    new setProductItem("champion", "champion-003", "Patchwork Organic Cotton T-Shirt", "900000", "100", "champion-003.jpg", "Phối lại bản chỉnh sửa cần thiết của bạn với chiếc áo thun cotton hữu cơ này, có túi nylon tương phản hoàn chỉnh với phần hoàn thiện logo script."),
    new setProductItem("champion", "champion-004", "Organic Cotton Script Logo T-Shirt", "800000", "100", "champion-004.jpg", "Là kiểu dáng cổ điển vượt thời gian, chiếc áo thun cổ thuyền này được làm thủ công từ bông hữu cơ và được nhấn nhá bằng biểu tượng kịch bản được thêu trên ngực."),
    new setProductItem("champion", "champion-005", "Script Logo Stripe Organic Cotton T-Shirt", "900000", "100", "champion-005.jpg", "Tưởng tượng lại những yếu tố cần thiết với biểu trưng kịch bản nổi bật này và áo phông thiết kế sọc, được làm thủ công từ bông hữu cơ."),
    new setProductItem(
      "champion",
      "champion-006",
      "Varsity Script Logo Organic Cotton T-Shirt",
      "900000",
      "100",
      "champion-006.jpg",
      "Tạo cho trang phục của bạn một nét đặc trưng riêng với chiếc áo thun có biểu tượng chữ viết lấy cảm hứng từ phong cách khác biệt này, được làm thủ công từ bông hữu cơ để mang lại sự thoải mái vượt trội."
    ),
    new setProductItem("champion", "champion-007", "Eco Future Organic Cotton Blend T-Shirt", "800000", "100", "champion-007.jpg", "Được thiết kế chú trọng đến môi trường, chiếc áo thun pha cotton hữu cơ này có hình thêu bền vững và thẻ giấy tái chế."),
    new setProductItem("champion", "champion-008", "Colour Block Insert Quick Dry Jersey T-Shirt", "600000", "100", "champion-008.jpg", "Được thiết kế để nâng cao hiệu suất, chiếc áo thun nhanh khô này có chèn lưới, chi tiết logo ở ngực và chữ C phản quang ở tay áo."),
    new setProductItem("champion", "champion-009", "Small Script Logo Long Sleeve Organic Cotton T-Shirt", "900000", "100", "champion-009.jpg", "Định nghĩa lại các tác phẩm kinh điển với chiếc áo thun cotton hữu cơ có chi tiết thêu logo chữ viết nhỏ trên ngực."),
    new setProductItem("champion", "champion-010", "Champion USA Basketball Graphic Print T-Shirt", "600000", "100", "champion-010.jpg", "Thể thao in hình bóng rổ ở ngực, chiếc áo thun Champion USA này là thứ phải có để có một cái nhìn lấy cảm hứng từ di sản."),
  ];
  if (localStorage.getItem("listproduct") == null) {
    localStorage.setItem("listproduct", JSON.stringify(arrProduct));
  }
}

var txtType = "";
var correctTypeProductArr = [];
var numberOfItems;

// show product type list onload
function showProductTypeListFnc() {
  var listType = "";

  arrayType = JSON.parse(localStorage.getItem("listype"));

  for (let i = 0; i < arrayType.length; i++) {
    txtType = "'" + arrayType[i].typeID + "'";
    var type = '<li class="product-type__item"  id="' + arrayType[i].typeID + '" onclick="showHomeProductList(0,15,' + txtType + ');"><a href="#home-product-id" class="product-type__item-link">' + arrayType[i].type + "</a></li>";
    listType += type;
  }

  document.getElementById("product-type-list-id").innerHTML = listType;
}

// hiển thị sản phẩm từ file JSON
function showHomeProductList(pageNumber, maxIndex, typeID) {
  numberOfItems = 0;
  var productRow = "";
  var k = maxIndex * pageNumber;
  var t = 0;

  // console.log("k=" + k);

  var originalArray = JSON.parse(localStorage.getItem("listproduct"));
  if (typeID === "all") {
    for (let i = 0; i < originalArray.length; i++) {
      correctTypeProductArr[i] = originalArray[i];
    }
  } else {
    var j = 0;
    for (let i = 0; i < originalArray.length; i++) {
      if (originalArray[i].typeID === typeID) {
        numberOfItems++;
        correctTypeProductArr[j] = originalArray[i];
        j++;
      }
    }
    correctTypeProductArr.length = j;
  }

  var tempProductArr = []; // show home product list
  for (let i = 0; i < 3; i++) {
    var productCols = "";
    for (let j = 0; j < 5; j++) {
      if (correctTypeProductArr[k] == null) {
        break;
      } else {
        tempProductArr[t] = correctTypeProductArr[k];
        var productCol = "";

        productCol =
          '<div class="grid__col-2-4"><div class="home-product__item"><a href="" class="home-product__item-link"><img src="./access/image/product/' +
          tempProductArr[t].img +
          '" alt="product image" class="home-product__item-img" /></a><!-- product detail --><div class="home-product__item-container"><div class="home-product__item-title">' +
          tempProductArr[t].name +
          '</div><div class="home-product__item-price">Giá: <span>' +
          tempProductArr[t].price.toLocaleString() +
          ' VND</span></div><div class="home-product__item-btn-field"><button id="' +
          tempProductArr[t].productID +
          '" class="home-product__item-cart-insert btn" onclick="showDetail(this.id);">Xem chi tiết</button><a href="#" class="home-product__item-link-btn"><button class="home-product__item-buy-btn btn">Mua Ngay</button></a></div></div></div></div>';
        productCols += productCol;
        k++;
        t++;
      }
    }
    productRow += ' <div class="grid__row">' + productCols + "</div>";
    showHomeProductPagination();
  }

  document.getElementById("home-product-id").innerHTML = '<div class="grid">' + productRow + "</div>";
}

// function showDetail(id) {
//     console.log(id);
//     for (let i = 0; i < tempProductArr.length; i++) {
//         if (tempProductArr[i].productID == id) {
//             console.log(tempProductArr[i]);
//         }
//     }
// }

// check user login
function login() {
  var user = [];
  localStorage.setItem("UserInfo", JSON.stringify(user));
  user = JSON.parse(localStorage.getItem("UserInfo"));
  var userName = document.getElementById("login-form__username").value;
  var password = document.getElementById("login-form__password").value;
  adminArray = JSON.parse(localStorage.getItem("user"));
  if (userName == "" || password == "") {
    alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu");
  } else {
    for (i = 0; i < adminArray.length; i++) {
      if (userName == adminArray[i].userName && password == adminArray[i].password) {
        alert("Dang nhap thanh cong");
        var info = {
          userName: userName,
          fullname: adminArray[i].fullname,
          userType: adminArray[i].userType,
          phoneNumber: adminArray[i].phone,
        };
        user.push(info);
        localStorage.setItem("UserInfo", JSON.stringify(user));
        return location.reload();
      }
    }
    alert("Thong tin tai khoan hoạc mat khau khong chinh xac");
  }
}

// logout
function logout() {
  if (confirm("Xác nhận đăng xuất") == true) {
    localStorage.removeItem("UserInfo");
    return location.reload();
  }
}

// dang ky thanh vien moi
function reg() {
  var userName = document.getElementById("username").value;
  var phone = document.getElementById("phonenumber").value;
  var fullname = document.getElementById("fullname").value;
  var password = document.getElementById("password").value;
  var password_confim = document.getElementById("password_confirm").value;
  var err_fullname = "";
  var err_userName = "";
  var err_phone = "";
  var err_password = "";
  var err_passwordConfirm = "";
  listuser = JSON.parse(localStorage.getItem("user"));
  if (userName == "") {
    err_userName = "<p>Không được bỏ trống userName</p>";
  } else {
    if (userName.length < 8 || userName > 32) {
      err_userName = "<p>Độ dài từ 8 tới 32 ký tự</p>";
    } else {
      for (i = 0; i < listuser.length; i++) {
        if (userName == listuser[i].userName) {
          err_userName = "<p>Usernam đã tồn tại trong hệ thống</p>";
        }
      }
    }
  }

  if (fullname == "") {
    err_fullname = "<p>Không được bỏ trống họ và tên</p>";
  } else {
    if (fullname.length < 8 || fullname.length > 32) {
      err_fullname = "<p>Độ dài từ 8 tới 32 ký tự</p>";
    }
  }

  if (phone == "") {
    err_phone = "<p>Không được bỏ trống số điện thoại</p>";
  } else {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var mobile = phone;

    if (vnf_regex.test(mobile) == false) {
      err_phone = "<p>Số điện thoại không đúng định dạng</p>";
    }
  }
  if (password == "") {
    err_password = "<p>Không được bỏ trống mật khẩu</p>";
  } else {
    if (password.length < 8 || password.length > 32) {
      err_password = "<p>Độ dài từ 8 tới 32 ký tự</p>";
    }
  }
  if (password != password_confim) {
    err_passwordConfirm = "<p>Mật khẩu xác nhận không chính xác</p>";
  }
  document.getElementById("err_userName").innerHTML = err_userName;
  document.getElementById("err_fullname").innerHTML = err_fullname;
  document.getElementById("err_phone").innerHTML = err_phone;
  document.getElementById("err_password").innerHTML = err_password;
  document.getElementById("err_password-confirm").innerHTML = err_passwordConfirm;
  if (err_passwordConfirm == "" && err_userName == "" && err_fullname == "" && err_password == "" && err_phone == "") {
    var user = {
      userName: userName,
      fullname: fullname,
      phone: phone,
      password: password,
      userType: "khachHang",
    };
    userarray = JSON.parse(localStorage.getItem("user"));
    userarray.push(user);
    localStorage.setItem("user", JSON.stringify(userarray));
    alert("Bạn đã đăng ký thành công");
    var user = [];
    for (i = 0; i < userarray.length; i++) {
      if (userName == userarray[i].userName && password == userarray[i].password) {
        // window.location = "http://localhost:8080/unitop.vn/Front-end/lambenngoai/web1/do-an-web-1/"
        var info = {
          userName: userName,
          fullname: userarray[i].fullname,
          userType: userarray[i].userType,
          phoneNumber: userarray[i].phone,
        };
        user.push(info);
        localStorage.setItem("UserInfo", JSON.stringify(user));
        return location.reload();
      }
    }
    hideRegisterFormFnc();
    // window.location = "http://localhost:8080/unitop.vn/Front-end/lambenngoai/web1/do-an-web-1/";
  }
}

// tao admin
function createAdmin() {
  var adminArray = [];
  if (localStorage.getItem("user") == null) {
    var admin1 = {
      userName: "admin",
      password: "admin",
      fullname: "Tran Quang Dao",
      dateSignup: "23-11-1999",
      userType: "admin",
      phone: "099999999",
    };
    var admin2 = {
      userName: "quangdao",
      password: "quangdao",
      fullname: "Tran Van Dong ",
      dateSignup: "23-11-1999",
      userType: "khachHang",
      phone: "099999899",
    };
    var admin3 = {
      userName: "vandong123",
      password: "vandong123",
      fullname: "Trần Văn Đồng",
      dateSignup: "23-11-1999",
      userType: "admin",
      phone: "099999999",
    };
    var admin4 = {
      userName: "vantuan123",
      password: "vantuan123",
      fullname: "Trần Văn Tuấn ",
      dateSignup: "23-11-1999",
      userType: "khachHang",
      phone: "099999899",
    };
    var admin5 = {
      userName: "thihuong123",
      password: "thihuong123",
      fullname: "Trần Thị Hương",
      dateSignup: "23-11-1999",
      userType: "khachHang",
      phone: "099999999",
    };
    var admin6 = {
      userName: "trihai123",
      password: "trihai123",
      fullname: "Trần Trí Hải ",
      dateSignup: "23-11-1999",
      userType: "khachHang",
      phone: "099999899",
    };
    var admin7 = {
      userName: "trinam123",
      password: "trinam123",
      fullname: "Trần Trí Nam",
      dateSignup: "23-11-1999",
      userType: "khachHang",
      phone: "099999999",
    };
    var admin8 = {
      userName: "chienminh1b",
      password: "chienminh1b",
      fullname: "Trần Minh Chiến ",
      dateSignup: "23-11-1999",
      userType: "khachHang",
      phone: "099999899",
    };

    adminArray.push(admin1);
    adminArray.push(admin2);
    adminArray.push(admin3);
    adminArray.push(admin4);
    adminArray.push(admin5);
    adminArray.push(admin6);
    adminArray.push(admin7);
    adminArray.push(admin8);
    localStorage.setItem("user", JSON.stringify(adminArray));
  }
}

function searchProduct(noOfPages, typeID) {
  numberOfItems = 0;
  var productRow = "";
  var k = 15 * 0;
  var t = 0;

  // console.log("k=" + k);
  var text = document.getElementById("page-header-search-field").value;

  var originalArray = JSON.parse(localStorage.getItem("listproduct"));
  var j = 0;
  var check = 0;
  for (let i = 0; i < originalArray.length; i++) {
    // đoạn này kiểm tra sản phẩm có tồn tại text không
    if (originalArray[i].name.includes(text) == true) {
      // alert(text)
      numberOfItems++;
      correctTypeProductArr[j] = originalArray[i];
      j++;
      check++;
    }
  }
  if (check == 0) {
    return alert("Không có sản phẩm cần tìm");
  }
  correctTypeProductArr.length = j;

  var tempProductArr = []; // show home product list
  for (let i = 0; i < 3; i++) {
    var productCols = "";
    for (let j = 0; j < 5; j++) {
      if (correctTypeProductArr[k] == null) {
        break;
      } else {
        tempProductArr[t] = correctTypeProductArr[k];
        var productCol = "";

        productCol =
          '<div class="grid__col-2-4"><div class="home-product__item"><a href="" class="home-product__item-link"><img src="./access/image/product/' +
          tempProductArr[t].img +
          '" alt="product image" class="home-product__item-img" /></a><!-- product detail --><div class="home-product__item-container"><div class="home-product__item-title">' +
          tempProductArr[t].name +
          '</div><div class="home-product__item-price">Giá: <span>' +
          tempProductArr[t].price +
          '$</span></div><div class="home-product__item-btn-field"><button id="' +
          tempProductArr[t].productID +
          '" class="home-product__item-cart-insert btn" onclick="showDetail(this.id);">Xem chi tiết</button><a href="#" class="home-product__item-link-btn"><button class="home-product__item-buy-btn btn">Mua Ngay</button></a></div></div></div></div>';
        productCols += productCol;
        k++;
        t++;
      }
    }
    productRow += ' <div class="grid__row">' + productCols + "</div>";
    showHomeProductPagination();
  }

  document.getElementById("home-product-id").innerHTML = '<div class="grid">' + productRow + "</div>";
}

function showHomeProductListPage(page, noOfPages) {
  var productRow = "";
  var k = 15 * page;
  var t = 0;

  var tempProductArr = []; // show home product list
  for (let i = 0; i < 3; i++) {
    var productCols = "";
    for (let j = 0; j < 5; j++) {
      if (correctTypeProductArr[k] == null) {
        break;
      } else {
        tempProductArr[t] = correctTypeProductArr[k];
        var productCol = "";

        productCol =
          '<div class="grid__col-2-4"><div class="home-product__item"><a href="" class="home-product__item-link"><img src="./access/image/product/' +
          tempProductArr[t].img +
          '" alt="product image" class="home-product__item-img" /></a><!-- product detail --><div class="home-product__item-container"><div class="home-product__item-title">' +
          tempProductArr[t].name +
          '</div><div class="home-product__item-price">Giá: <span>' +
          tempProductArr[t].price +
          ' VND</span></div><div class="home-product__item-btn-field"><button id="' +
          tempProductArr[t].productID +
          '" class="home-product__item-cart-insert btn" onclick="showDetail(this.id);">Xem chi tiết</button><a href="#" class="home-product__item-link-btn"><button class="home-product__item-buy-btn btn">Mua Ngay</button></a></div></div></div></div>';
        productCols += productCol;
        k++;
        t++;
      }
    }
    productRow += ' <div class="grid__row">' + productCols + "</div>";
    showHomeProductPagination();
  }
  document.getElementById("home-product-id").innerHTML = '<div class="grid">' + productRow + "</div>";
}

function showHomeProductPagination() {
  // find number of pages
  var numberOfPages = (correctTypeProductArr.length - (correctTypeProductArr.length % 15)) / 15;

  // find leftItemsQuantity
  var quantityOfPageLeft = correctTypeProductArr.length - numberOfPages * 15;

  if (quantityOfPageLeft > 0) {
    numberOfPages++;
  }

  // var prevArrow = '<a class="home-product-pagination-prev">' + '<ion-icon name="chevron-back-outline"></ion-icon>' + "</a>";
  // var nextArrow = '<a class="home-product-pagination-next">' + '<ion-icon name="chevron-forward-outline"></ion-icon>' + "</a>";

  var paginationPage = "";
  for (let i = 0; i < numberOfPages; i++) {
    var paginationPageNumber = '<a id="paginationPageNumber-' + i + '" href="#product-section-id" class="home-product-pagination-page" onclick="showHomeProductListPage(' + i + "," + numberOfPages + ');">' + parseInt(i + 1) + "</a>";
    paginationPage += paginationPageNumber;
  }

  var pagination = "";
  if (numberOfPages > 1) {
    // pagination = prevArrow + paginationPage + nextArrow;
    pagination = paginationPage;
  } else {
    pagination = paginationPage;
  }
  document.getElementById("home-product-pagination-id").innerHTML = pagination;
}

function showDetail(productID_detail) {
  products = JSON.parse(localStorage.getItem("listproduct"));
  var s = "";
  var home = '<button class="to-home-button btn" onclick="location.reload();">Tiếp tục mua</button>';

  for (i = 0; i < products.length; i++) {
    var home = '<button class="to-home-button btn" onclick="location.reload();">Tiếp tục mua</button>';
    if (productID_detail == products[i].productID) {
      s +=
        "   <div class='detailproduct'><div class='thumbnail'><img src='access/image/product/" +
        products[i].img +
        "' alt=''></div><div class='information'><h1 class='name'>" +
        products[i].name +
        "</h1> <p class='code'><strong>Ma san pham:</strong>" +
        products[i].productID +
        "</p> <p class='price'> <strong>Gia san pham:</strong>" +
        products[i].price +
        "</p> <p class='detail'> <strong>Chi tiết: </strong>:" +
        products[i].detail +
        "</p><p><strong>Kích thước</strong>:</p><ul class='listsize'><li>39</li><li>40</li><li>41</li><li>42</li><li>43</li></ul><div><button id='" +
        products[i].productID +
        "' onclick='addProductToCart(this.id)' class='add_to_cart'>Thêm vào giỏ hàng</button>" +
        home +
        "</div></div></div>";
      break;
    }
  }
  document.getElementById("home-product-pagination-id").innerHTML = " ";
  document.getElementById("home-product-id").innerHTML = s;
}

function setCart(productID, image, price, name, numOrder) {
  this.productID = productID;
  this.image = image;
  this.price = price;
  this.name = name;
  this.numOrder = numOrder;
}

function addProductToCart(thisID) {
  var id = thisID;
  listproduct = JSON.parse(localStorage.getItem("listproduct"));

  cartt = JSON.parse(localStorage.getItem("listCart"));
  for (i = 0; i < listproduct.length; i++) {
    if (listproduct[i].productID == id) {
      if (localStorage.getItem("listCart") == null) {
        var product = [new setCart(listproduct[i].productID, listproduct[i].img, listproduct[i].price, listproduct[i].name, 1)];

        localStorage.setItem("listCart", JSON.stringify(product));
        alert("Đã thêm sản phẩm vào giỏ hàng");
        return location.reload();
      } else {
        for (k = 0; k < cartt.length; k++) {
          if (cartt[k].productID == id) {
            cartt[k].numOrder++;
            localStorage.setItem("listCart", JSON.stringify(cartt));
            alert("Đã thêm sản phẩm vào giỏ hàng");
            return location.reload();
          }
        }
        var product = {
          productID: listproduct[i].productID,
          image: listproduct[i].img,
          price: listproduct[i].price,
          name: listproduct[i].name,
          numOrder: 1,
        };
        cartt.push(product);
        localStorage.setItem("listCart", JSON.stringify(cartt));
        alert("Đã thêm sản phẩm vào giỏ ");
        return location.reload();
      }
    }
  }
}

function goToFormCheckout() {
  if (localStorage.getItem("UserInfo") === null) {
    alert("Bạn cần đăng nhập để hoàn tất thanh toán");
  } else {
    document.getElementById("modal-id").classList.add("show-component");
    document.getElementById("form-checkout").classList.add("cart__display");
  }
}

function showCart() {
  var cartTitle = '<div class="page-header-top__right-cart-heading">' + '<div class="page-header-top__right-cart-title">Giỏ hàng</div>' + "</div>";

  var cartContainerOpenTag = '<div class="page-header-top__right-cart-container">';
  var closeDiv = "</div>";
  var cartPayment = '<div class="page-header-top__right-cart-pay">' + '<button class="page-header-top__right-cart-pay-btn btn" onclick="goToFormCheckout();">' + "Thanh toán" + "</button>" + "</div>";

  // document.getElementById("page-header-top__right-cart-box-id").classList.add("cart__display");
  var cartt = JSON.parse(localStorage.getItem("listCart"));
  if (localStorage.getItem("listCart") === null) {
    var emptyCart = '<div class="page-header-top__right-cart-show empty-cart">' + '<div class="page-header-top__right-cart-empty-noti">Giỏ hàng trống</div>' + "</div>";
    document.getElementById("page-header-top__right-cart-box-id").innerHTML = cartTitle + emptyCart + closeDiv;
  } else {
    // for (m = 0; m < cartt.length; m++) {
    //   sum = sum - -(cartt[m].price * cartt[m].numOrder);
    // }
    var sum;
    if (cartt.length == 0) {
      var emptyCart = '<div class="page-header-top__right-cart-show empty-cart">' + '<div class="page-header-top__right-cart-empty-noti">Giỏ hàng trống</div>' + "</div>";
      document.getElementById("page-header-top__right-cart-box-id").innerHTML = cartTitle + emptyCart + closeDiv;
    } else {
      var cartItems = "";
      var cartItemOpenTag = '<div class="page-header-top__right-cart-item">';
      for (let i = 0; i < cartt.length; i++) {
        sum = 0;
        sum = sum - -(cartt[i].price * cartt[i].numOrder);
        var cartItem =
          '<img src="./access/image/product/' +
          cartt[i].image +
          '" alt="" class="page-header-top__right-cart-img" />' +
          '<div class="page-header-top__right-cart-info">' +
          '<div class="page-header-top__right-cart-name">' +
          cartt[i].name +
          "</div>" +
          '<div class="page-header-top__right-cart-quantity">' +
          "SL: <span>" +
          cartt[i].numOrder +
          "</span>" +
          "</div>" +
          '<div class="page-header-top__right-cart-total-price">' +
          "Thành tiền: <span>" +
          sum.toLocaleString() +
          "</span>" +
          "</div>" +
          "</div>" +
          '<div class="page-header-top__right-cart-remove">' +
          '<button id="' +
          cartt[i].productID +
          '" class="page-header-top__right-cart-remove-btn" onclick="deleteCartItem(this.id)">' +
          "Xoá" +
          "</button>" +
          "</div>";
        cartItems += cartItemOpenTag + cartItem + closeDiv;
      }

      document.getElementById("page-header-top__right-cart-box-id").innerHTML = cartTitle + cartContainerOpenTag + cartItems + closeDiv + cartPayment;
    }
  }
}

function showCheckOutItem() {
  var userArr = JSON.parse(localStorage.getItem("UserInfo"));
  document.getElementById("fullnameuser").value = userArr[0].fullname;
  document.getElementById("phoneuser").value = userArr[0].phoneNumber;

  if (localStorage.getItem("listCart") != null) {
    var checkoutArr = JSON.parse(localStorage.getItem("listCart"));
    var sum = 0;
    s = "";
    for (let i = 0; i < checkoutArr.length; i++) {
      sum = sum - -(checkoutArr[i].price * checkoutArr[i].numOrder);
      var s1 = '<li class="check-out-product-item">' + '<div class="thumb">' + '<img src="./access/image/product/' + checkoutArr[i].image + '" alt="">' + "</div>" + '<div class="moreinfo">' + "<p>Số lượng: " + checkoutArr[i].numOrder + "</p>" + "</div>";
      ("</li>");
      s += s1;
    }
  }
  document.getElementById("detailCheckout").innerHTML = '<ul class="listproduct">' + s + "</ul>" + '<p class="form-checkout-total"><strong>Tổng tiền: ' + sum + "</strong></p>";
}

function setCheckoutInfo(fullname, phone, address, note, payment, maDH) {
  this.fullname = fullname;
  this.phone = phone;
  this.address = address;
  this.note = note;
  this.payment = payment;
  this.maDH = maDH;
}

function checkOut() {
  var fullname = document.getElementById("fullnameuser").value;
  var phone = document.getElementById("phoneuser").value;
  listCheckOut1 = JSON.parse(localStorage.getItem("listCheckOut"));

  if (listCheckOut1 == null) {
    random = 1;
  } else {
    var random = listCheckOut1.length + 1;
  }
  if ((address = document.getElementById("address").value === "" || phone === "" || fullname === "")) {
    alert("Nhập đầy đủ thông tin thanh toán");
  } else {
    var checkoutArr = JSON.parse(localStorage.getItem("listCart"));
    var address = document.getElementById("address").value;
    var note = document.getElementById("notes").value;
    var payment = document.getElementById("payment").value;
    var cartArr = [];

    var list = JSON.parse(localStorage.getItem("listCartCheckout"));
    for (let i = 0; i < checkoutArr.length; i++) {
      var check = {
        maDH: "DH" + random,
        productName: checkoutArr[i].name,
        numOrder: checkoutArr[i].numOrder,
        price: checkoutArr[i].price,
      };
      cartArr.push(check);
    }
    if (localStorage.getItem("listCartCheckout") == null) {
      localStorage.setItem("listCartCheckout", JSON.stringify(cartArr));
    } else {
      var h = list.concat(cartArr);
      localStorage.setItem("listCartCheckout", JSON.stringify(h));
    }

    var UserInfo = JSON.parse(localStorage.getItem("UserInfo"));
    var today = new Date();
    var date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;

    var checkOutInfo = {
      userName: UserInfo[0].userName,
      fullname: fullname,
      time: dateTime,
      phone: phone,
      address: address,
      note: note,
      payment: payment,
      status: "Đang xử lý",
      maDH: "DH" + random,
    };
    if (localStorage.getItem("listCheckOut") == null) {
      var arr = [];
      arr.push(checkOutInfo);
      localStorage.setItem("listCheckOut", JSON.stringify(arr));
    } else {
      listCheckOut1.push(checkOutInfo);
      localStorage.setItem("listCheckOut", JSON.stringify(listCheckOut1));
    }

    localStorage.removeItem("listCart");
    document.getElementById("modal-id").classList.remove("show-component");
    document.getElementById("form-checkout").classList.remove("cart__display");
    alert("Đã thanh toán đơn hàng");
    location.reload();
  }
}

function deleteCartItem(obj) {
  var id = obj;
  cartt = JSON.parse(localStorage.getItem("listCart"));
  for (i = 0; i < cartt.length; i++) {
    if (id == cartt[i].productID) {
      cartt.splice(i, 1);
      localStorage.setItem("listCart", JSON.stringify(cartt));
      alert("Đã xóa sản phẩm khỏi giỏ hàng");
      return location.reload();
    }
  }
}

// lịch sử thanh toán
function listcart() {
  if (localStorage.getItem("UserInfo") == null) {
    alert("Vui lòng đăng nhập để tiếp tục");
  } else {
    document.getElementById("listbill").classList.add("hien");
    var s = "";
    var listcart = JSON.parse(localStorage.getItem("listCartCheckout"));
    listCheckOut = JSON.parse(localStorage.getItem("listCheckOut"));
    var UserInfo = JSON.parse(localStorage.getItem("UserInfo"));
    var check = 0;
    for (i = 0; i < listCheckOut.length; i++) {
      if (listCheckOut[i].userName == UserInfo[0].userName) {
        s += "<span>" + listCheckOut[i].time + "</span><span>Mã đơn hàng:" + listCheckOut[i].maDH + "</span><table><thead> <tr> <th>Stt</th><th>Tên sản phẩm</th><th>Số lượng</th><th>Đơn giá</th><th>Thành tiền</th></tr></thead><tbody>";
        var sum = 0;
        var count = 1;
        for (j = 0; j < listcart.length; j++) {
          if (listCheckOut[i].maDH == listcart[j].maDH) {
            s += "<tr><td>" + count + "</td><td>" + listcart[j].productName + "</td><td>" + listcart[j].numOrder + "</td><td>" + listcart[j].price + "</td> <td>" + listcart[j].price * listcart[j].numOrder + "</td> </tr>";
            sum += listcart[j].price * listcart[j].numOrder;
            count++;
          }
        }
        s += "</tbody></table><div class='total'><p>Tổng tiền:</p>   <strong>" + sum.toLocaleString() + " VND</strong> </div>";
        check++;
      }
    }
    if (check == 0) {
      document.getElementById("bill").innerHTML = "Bạn không có đơn hàng nào";
    } else {
      document.getElementById("bill").innerHTML = s;
    }
  }
}

function hidelistbill() {
  return document.getElementById("listbill").classList.remove("hien");
}
// onload auto tạo form login reg

function createFormLogin() {
  var s =
    '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" onclick="showLoginFormFnc()">Đăng nhập</span></div><div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="showRegisterFormFnc()">Đăng ký</span></div>';
  document.getElementById("form_login_reg").innerHTML = s;
}

function isLogin() {
  // localStorage.removeItem('UserInfo')
  if (localStorage.getItem("UserInfo") == null) {
    createFormLogin();
  } else {
    user = JSON.parse(localStorage.getItem("UserInfo"));
    if (user[0].userType == "khachHang") {
      s =
        '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" >Xin chào: ' +
        user[0].fullname +
        '</span> </div> <div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="logout()" >(Đăng xuất)</span></div>';
      document.getElementById("form_login_reg").innerHTML = s;
    } else {
      s =
        '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" >Xin chào:' +
        user[0].fullname +
        '</span> </div> <div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="logout()" >(Đăng xuất)</span></div><div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span"><a href="admin.html" ><i class="fas fa-forward go-to-admin-icon"></i></a></span></div>';
      document.getElementById("form_login_reg").innerHTML = s;
    }
  }
}

function onloadFnc() {
  showCart();
  createFormLogin();
  createAdmin();
  isLogin();
  // console.log(adminArray);

  createType();
  createProduct();
  showHomeProductList(0, 15, "all");
  showHomeProductPagination();
  showProductTypeListFnc();
  showCheckOutItem();
}

window.onload = onloadFnc;
