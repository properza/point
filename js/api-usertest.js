// for use
let LiffID = "2002643017-lG8dD4AN";
let LiffUrl = "https://liff.line.me/2002643017-lG8dD4AN";

// Test Link
// let LiffID = "2002643017-0wvxQMYw";
// let LiffUrl = "https://liff.line.me/2002643017-0wvxQMYw";

const submitModal2 = document.getElementById('submit-modal2');
const buttonText = document.getElementById('button-text');
const loadingStatus = document.getElementById('loading-status');

async function fetchUserProfile() {
  try {
    // User is logged in, fetch the user profile immediately
    try {
      liff
        .getProfile()
        .then((profile) => {
          // console.log('User profile:', profile);
          console.log(profile);

          const customer_id = profile.userId;

          if (document.getElementById("CustomerId")) {
            document.getElementById("CustomerId").value = customer_id;
          } else if (document.getElementById("userid")) {
            document.getElementById("userid").value = customer_id;
          }
          //Api 301 Get all user
          const getuserprofile =
            "https://games.myworld-store.com/api/customers/customerInfo";

          let Getuserprofile = {
            url: getuserprofile,
            method: "POST",
            timeout: 0,
            headers: {
              "Content-Type": "application/json"
            },
            data: JSON.stringify({
              customer_id: customer_id,
              picture: profile.pictureUrl, // Use the variable here
              name: profile.displayName
            })
          };
          
          $.ajax(Getuserprofile).done(function (response) {
            $("#Nameuser").text(response.name);
            $("#points").text(`COINS: ${response.point}`);
            $("#GamePoints").text(`Game Points: ${response.game_point}`);
            $("#Profileimage").attr("src", response.picture);
            $("#Profilemini").attr("src", response.picture);
            $("#Telephone").attr("value", response.phone);

            var userPoints = response.point;
            console.log(response.phone);

          // Show modal if phone number is not available
            if (!response.phone) {
              $("#modal1").show();
              $("#register").on("click", function () {
                this.classList.add('disable');
                this.textContent = 'กำลังบันทึก...';
                const phoneNumber = $("#phoneNumber").val();
                if (phoneNumber) {
                  const updatePhoneUrl = "https://games.myworld-store.com/api/customers/customerInfo/updatePhone";
                  let updatePhoneData = {
                    url: updatePhoneUrl,
                    method: "PUT",
                    timeout: 0,
                    headers: {
                      "Content-Type": "application/json"
                    },
                    data: JSON.stringify({
                      customer_id: customer_id,
                      phone: phoneNumber
                    })
                  };

                  $.ajax(updatePhoneData).done(function (updateResponse) {
                    // Update the phone number field
                    $("#Telephone").attr("value", updateResponse.phone);
                    // Hide the modal
                    $("#modal1").hide();
                    // Show success popup
                    Swal.fire({
                      title: "ลงทะเบียนสำเร็จ",
                      text: "คุณได้ลงทะเบียนเรียบร้อยแล้ว",
                      icon: "success",
                      confirmButtonText: "ตกลง"
                    });
                  }).fail(function (jqXHR, textStatus, errorThrown) {
                    console.error("Failed to update phone number:", textStatus, errorThrown);
                    $("#modal1").hide();
                    Swal.fire({
                      title: "เกิดข้อผิดพลาด",
                      text: jqXHR.responseJSON.message || "ไม่สามารถลงทะเบียนได้",
                      icon: "error",
                      timer: 3000,
                      showConfirmButton: false
                    });
                    this.classList.remove('disable');
                    this.textContent = 'บันทึก';
                  });
                } else {
                  $("#errorText").text("กรุณากรอกเบอร์โทร");
                  this.classList.remove('disable');
                  this.textContent = 'บันทึก';
                }
              });
            }

            //Api 605 Get all merchandise
            
            let Allmerchandise = {
              url: `https://games.myworld-store.com/api/merchandises/publish/${customer_id}/`,
              method: "GET",
              timeout: 0,
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDUzMzYzNDR9.g0VSsvTajlOr_FsNiQBTuCbIUM-O24R5jCwREc_9eP0"
              }
            };

            $.ajax(Allmerchandise)
              .done(function (response) {
                // Check if the response is an array and has items
                if (Array.isArray(response)) {
                  // Loop through the array of merchandise items
                  response.forEach(function (item) {
                    var isEnabled = userPoints >= item.point;
                    var canredeem = item.can_redeem;
                    var currentDate = new Date(); // Get the current date
                    var startDate = new Date(item.start_date); // Parse the start date
                    var endDate = new Date(item.end_date);
                    
                    // var perMount = (item.remaining <= 0 || !endDate) ? "permount-zero" :"";
                    var disabledClass = !isEnabled || !canredeem ? "disabled-overlay" : "";
                    var isWithinDateRange = currentDate >= startDate && currentDate <= endDate;
                    var incoming = currentDate < startDate;
                    
                    var showText = null;

                      if(incoming){
                          showText = "permount-zero3 disabled-overlay";
                      }else if (!isWithinDateRange) {
                          showText = "permount-zero2 disabled-overlay";
                      } else if (item.remaining <= 0) {
                          showText = "permount-zero disabled-overlay";
                      }
                  
                    // Generate the merchandise HTML
                    const iconMY = "./images/logoProduct.png";
                    var merchandiseHTML = `
                      <div class="product ${disabledClass} ${showText}" data-merchandise-id="${item.merchandise_id}" >
                        <img src=${iconMY} alt="Product Logo">
                        <div class="content" data-name="p-1">
                          <img src="${item.picture}" alt="${item.name}">
                          <h3>${item.title1}</h3>
                          <h4>${item.title2}</h4>
                          <div class="price">${item.description}</div>
                        </div>
                      </div>
                    `;
                  
                    $("#products-container").append(merchandiseHTML);
                  });
                  // logo-2_1.png

                  // Attach a click event listener to product elements
                  $(document).on("click", ".product", function (event) {
                    if ($(this).hasClass("disabled-overlay")) {
                      event.preventDefault();
                      event.stopPropagation();

                      // Hide the modal
                      $("#modalpreview").css("display", "none");
                    } else {
                      // $('#modalpreview').css('display','grid')
                    }
                  });

                  // Apply grayscale filter only to the images inside disabled products
                  $(".disabled-overlay img").css("filter", "grayscale(100%)");

                  let selectedMerchandiseId = null;

                  // Attach a click event listener to product elements
                  $(".product").on("click", function () {
                    var selectedMerchandiseId = $(this).data("merchandise-id");

                    if (selectedMerchandiseId) {
                      var imgSrc = $(
                        '.product[data-merchandise-id="' +
                          selectedMerchandiseId +
                          '"] .content img'
                      ).attr("src");

                      var h3Value = $(this).find("h3").text();
                      var h4Value = $(this).find("h4").text();
                      var descriptionValue = $(this).find(".price").text();
                      $("#text-Modal").text(h3Value);
                      $("#text2-Modal").text(h4Value);
                      $("#description").text(descriptionValue);
                      $("#mockimage").attr("src", imgSrc);
                      $("#merchandiseId").val(selectedMerchandiseId);

                      //Api 402 get all trade
                    } else {
                      console.error("Merchandise ID is missing or empty.");
                    }
                  });
                } else {
                  console.error("Response is not an array or is empty.");
                }
              })
              .fail(function (jqXHR, textStatus, errorThrown) {
                console.error("AJAX request failed:", textStatus, errorThrown);
              });
          });
          $("#submit-modal").on("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission
            const buttonText = document.getElementById('button-text');
            const loadingStatus = document.getElementById('loading-status');
            this.classList.add('disabled');
            buttonText.textContent = 'กำลังบันทึก...';
            loadingStatus.classList.remove('hidden');
        
            // Collecting values from the form
            var formData = {
                address: $("#address").val(),
                province: $("#province").val(),
                district: $("#district").val(),
                sub_district: $("#subDistrict").val(),
                postcode: $("#zipCode").val(),
                receiver_name: $("#receiverName").val(),
                phone: $("#phone").val(),
                merchandise_id: $("#merchandiseId").val(),
                customer_id: $("#CustomerId").val(),
                note: $('#sizeUser').val(),
                type: $("input[name='bordered-radio']:checked").val() // Get selected radio button value
            };
        
            // Validation
            if (
                formData.type === "shipping" &&
                (!formData.address ||
                    !formData.province ||
                    !formData.district ||
                    !formData.sub_district ||
                    !formData.postcode ||
                    !formData.receiver_name ||
                    !formData.phone)
            ) {
                Swal.fire({
                    title: "เกิดข้อผิดพลาด",
                    text: "กรุณากรอกข้อมูลให้ครบถ้วน",
                    icon: "error",
                    confirmButtonText: "ปิด"
                }).then((result) => {
                    if (result.isConfirmed) {
                        buttonText.textContent = 'แลกสิทธิ์';
                        loadingStatus.classList.add('hidden');
                        this.classList.remove('disabled');
                    }
                });
                return;  // Stop execution if validation fails
            }
        
            // Confirmation popup before sending data
            Swal.fire({
                title: "ต้องการแลกสิทธิ์หรือไม่?",
                text: "เมื่อกดปุ่ม 'ยืนยัน' ท่านจะไม่สามารถแก้ไขข้อมูลได้",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "ปิด",
                confirmButtonText: "ยืนยัน"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Proceed with the AJAX request only after user confirmation
                    var tradeMerchandise = {
                        url: "https://games.myworld-store.com/api/customers/tradeMerchandise",
                        method: "POST",
                        timeout: 0,
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDUzMzYzNDR9.g0VSsvTajlOr_FsNiQBTuCbIUM-O24R5jCwREc_9eP0"
                        },
                        data: JSON.stringify({
                            merchandise_id: formData.merchandise_id,
                            customer_id: formData.customer_id,
                            receiver_name: formData.receiver_name,
                            address: formData.address,
                            sub_district: formData.sub_district,
                            district: formData.district,
                            province: formData.province,
                            postcode: formData.postcode,
                            phone: formData.phone,
                            note: formData.note,
                            type: formData.type
                        })
                    };
        
                    $.ajax(tradeMerchandise).done(function (response) {
                        if (response.type === "onsite") {
                            if (response.point == 0) {
                                Swal.fire({
                                    title: "ยืนยันรับสิทธิ์สำเร็จ",
                                    html: "<span '>กรุณายืนยันตัวตนกับทีมเจ้าหน้าที่</span>",
                                    icon: "",
                                    confirmButtonText: "ปิด",
                                    customClass: {
                                        confirmButton:
                                            " mb-[-2rem] w-[100%] h-[30px] px-[10rem] rounded-[3px] bg-cyan-500 border-1 border-[#28B7E1] text-[#fff] flex justify-center items-center",
                                        title: "mt-[-2.5rem]"
                                    },
                                    buttonsStyling: false,
                                    padding: "4rem 2rem",
                                    allowOutsideClick: false,
                                    showLoaderOnConfirm: true,
                                    preConfirm: () => {
                                        return new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                            }, 3000);
                                        });
                                    }
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        location.reload();
                                    }
                                });
                            } else {
                                Swal.fire({
                                    title: "กรุณาบันทึกหน้าจอ",
                                    html:
                                        "<span>และแสดงให้กับเจ้าหน้าที<br>เพื่อใช้ยืนยันรับสิทธิ์แลกซื้อ</span>" +
                                        '<div class="flex justify-between mt-[2rem] justify-item-center w-[100%] px-[5px] rounded-lg border-[1px] p-[5px] text-[#B0B0B0]"><p>Order number :</p> ' +
                                        "<span class='text-[#B0B0B0]'>" +
                                        response.trade_number + // Here, concatenate the response.trade_number correctly
                                        "</span></div>",
                                    icon: "",
                                    confirmButtonText: "ปิด",
                                    customClass: {
                                        confirmButton:
                                            "mt-[2rem] mb-[-2rem] w-[100%] h-[30px] px-[10rem] rounded-[3px] bg-cyan-500 border-1 border-[#28B7E1] text-[#fff] flex justify-center items-center",
                                        title: "mt-[-3rem]"
                                    },
                                    buttonsStyling: false,
                                    padding: "4rem 2rem",
                                    allowOutsideClick: false,
                                    showLoaderOnConfirm: true,
                                    preConfirm: () => {
                                        return new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                            }, 3000);
                                        });
                                    }
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        location.reload();
                                    }
                                });
                            }
                        } else if (response.type === "shipping") {
                            Swal.fire({
                                title: "แลกสิทธิ์สำเร็จ!",
                                text: "การแลกสิทธิ์ของคุณได้รับการยืนยันแล้ว",
                                icon: "success",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "ปิด"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    location.reload();
                                }
                            });
                        }
        
                        // Hide the modal
                        document.getElementById("modalpreview").style.display = "none";
                    }).fail(function () {
                        Swal.fire({
                            title: "เกิดข้อผิดพลาด",
                            text: "ไม่สามารถดำเนินการได้ กรุณาลองอีกครั้ง",
                            icon: "error",
                            confirmButtonText: "ปิด"
                        }).then(() => {
                            buttonText.textContent = 'แลกสิทธิ์';
                            loadingStatus.classList.add('hidden');
                            this.classList.remove('disabled');
                        });
                    });
                } else {
                    buttonText.textContent = 'แลกสิทธิ์';
                    loadingStatus.classList.add('hidden');
                    this.classList.remove('disabled');
                }
            });
        });
        

          var customerTrade = {
            url: `https://games.myworld-store.com/api/trades/customer/${customer_id}`,
            method: "GET",
            timeout: 0,
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDUzMzYzNDR9.g0VSsvTajlOr_FsNiQBTuCbIUM-O24R5jCwREc_9eP0"
            }
          };

          try {
            $.ajax(customerTrade)
              .done(function (response) {
                if (Array.isArray(response)) {
                  let tableBody = $("tbody"); // Assuming you have a <tbody> element in your HTML
                  let rowNumber = 0; // Initialize the row number counter
                  let merchandiseId = $("#merchandiseId").val();

                  response.forEach(function (Tradeorder, index) {
                    let Time = moment
                      .tz(Tradeorder.created_at, "Asia/Bangkok")
                      .format("DD/MM/YYYY HH:mm:ss");
                    let Type = Showtype(Tradeorder.type);
                    let ApproveProduct = getApproveStatus(
                      Tradeorder.approve_status
                    );
                    let ApproveProductText = ApproveProduct.circle.text();
                    let bgColor = ApproveProduct.bgColor;
                    let circleClass = ApproveProduct.circleClass; // Retrieve circleClass from the result of getApproveStatus
                    let Shipment = getShipmentstatus(
                      Tradeorder.shipment_status
                    );
                    let ShipmemtText = Shipment.Shipments.text();
                    let ShipmentClass = Shipment.ShipmentClass;
                    let bgShipment = Shipment.bgColor;
                    console.log(circleClass);
                    let additionalClasses = "";
                    let Shipmemttext = "";

                    // Check if bgColor is "bg-red-400", if true, add "text-white" class
                    if (bgColor === "bg-red-400") {
                      additionalClasses = "text-white";
                    }
                    if (bgShipment === "bg-red-400") {
                      Shipmemttext = "text-white";
                    }
                    const ContenTradeing = `
                    <div class="grid border-[#DBDBDB] px-3 py-6 mb-6 gap-2 shadow-lg">
                    <div class="flex justify-between">
                      <h1 class="text-2xl">${Tradeorder.trade_number}</h1>
                        <div class="flex gap-2 items-center ${bgColor} rounded-full py-1 px-2">
                        <div class="${circleClass} h-4 w-4 rounded-full"></div>
                        <h1 class="${additionalClasses}">${ApproveProductText}</h1>
                        </div>
                    </div>
                      <div class="flex gap-2">
                      
                        <p class="text-[#B3B3B3] text-xl">วันที่แลกซื้อ :</p> <p class="text-xl">${Time}</p>
                      </div>
                      <div class="flex gap-2">
                        <p class="text-[#B3B3B3] text-xl">Product :</p> <p class="text-xl">${Tradeorder.merchandise.name}</p>
                      </div>
                      <div class="flex gap-2">
                        <p class="text-[#B3B3B3] text-xl">จำนวน COINS ที่แลก :</p> <p class="text-xl">${Tradeorder.merchandise.point}</p>
                      </div>

                    <div class="flex justify-between">
                      <div class="flex gap-2">
                        <p class="text-[#B3B3B3] text-xl">การรับของ :</p> <p class="text-xl">${Type}</p>
                      </div>
                      <div class="flex items-center gap-2">
                        <p class="text-[#B3B3B3] text-xl">การตรวจสอบ :</p> 
                        <div class="flex gap-2 items-center ${bgShipment} rounded-full py-1 px-2">
                          <div class="${ShipmentClass} h-4 w-4 rounded-full"></div>
                          <h1 class="${Shipmemttext}">${ShipmemtText}</h1>
                        </div>
                      </div>
                    </div>
                    </div>
                    `;
                    $("#TradeHistory").append(ContenTradeing);
                  });
                  // ... rest of your code ...
                }
              })
              .fail(function (jqXHR, textStatus, errorThrown) {
                console.error("AJAX request failed:", textStatus, errorThrown);
              });
          } catch (e) {
            console.log(e);
          }

          const Showtype = (type) => {
            if (type === "onsite") {
              return "รับหน้าบูธ";
            } else if (type === "shipping") {
              return "จัดส่ง";
            } else {
              return type; // คืนค่า type ตามที่ได้รับ หากไม่ตรงกับเงื่อนไขใดๆ
            }
          };

          function getShipmentstatus(Shipstatus) {
            let ShipmentClass;
            let bgColor;
            // Create the status circle element

            // Depending on the status, change the color of the circle
            if (Shipstatus === "pending") {
              ShipmentClass = "bg-[#F1BC00]";
              bgColor = "bg-[#F4EBCB]";
              // Set the text and background color for the Shipstatus cell if it's "Shipping"
              return {
                Shipments: $("<div>")
                  .css({
                    display: "flex",
                    padding: "5px 3px",
                    border: "1px solid red",
                    color: "red",
                    gap: "7px",
                    "align-items": "center",
                    "justify-content": "center"
                  })
                  .append(document.createTextNode("รอดำเนินการ")),
                ShipmentClass: ShipmentClass,
                bgColor: bgColor
              };
            }
            if (Shipstatus === "complete") {
              ShipmentClass = "bg-[#1FD831]";
              bgColor = "bg-[#CBF4CC]";
              // Set the text and background color for the Shipstatus cell if it's "Shipping"
              return {
                Shipments: $("<div>")
                  .css({
                    display: "flex",
                    padding: "5px 3px",
                    border: "1px solid #1AA127",
                    color: "#1AA127",
                    gap: "7px",
                    "align-items": "center",
                    "justify-content": "center"
                  })
                  .append(document.createTextNode("จัดส่งสำเร็จ")),
                ShipmentClass: ShipmentClass,
                bgColor: bgColor
              };
            }
            if (Shipstatus === "cancel") {
              ShipmentClass = "bg-red-700";
              bgColor = "bg-red-400";
              // If Shipstatus is not "Shipping", handle other Shipstatuses here
              // For the sake of example, let's assume it's "Complete"
              return {
                Shipments: $("<div>")
                  .css({
                    display: "flex",
                    padding: "5px 3px",
                    border: "1px solid red",
                    color: "red",
                    gap: "7px",
                    "align-items": "center",
                    "justify-content": "center"
                  })
                  .append(document.createTextNode("ยกเลิกจัดส่ง")),
                ShipmentClass: ShipmentClass,
                bgColor: bgColor
              };
            }
            return Shipstatus;
          }

          function getApproveStatus(Approvestatus) {
            let circleClass; // Define circleClass here
            let bgColor;

            // Depending on the status, change the color of the circle
            if (Approvestatus === "pending") {
              circleClass = "bg-[#F1BC00]";
              bgColor = "bg-[#F4EBCB]";
              // Set the text and background color for the Approvestatus cell if it's "Shipping"
              return {
                circle: $("<div>")
                  .css({
                    display: "flex",
                    padding: "5px 3px",
                    border: "1px solid red",
                    color: "red",
                    gap: "7px",
                    "align-items": "center",
                    "justify-content": "center"
                  })
                  .append(document.createTextNode("รอดำเนินการ")),
                circleClass: circleClass,
                bgColor: bgColor
              };
            }

            if (Approvestatus === "complete") {
              circleClass = "bg-[#1FD831]";
              bgColor = "bg-[#CBF4CC]";

              // Set the text and background color for the Approvestatus cell if it's "Shipping"
              return {
                circle: $("<div>")
                  .css({
                    display: "flex",
                    padding: "5px 3px",
                    border: "1px solid red",
                    color: "red",
                    gap: "7px",
                    "align-items": "center",
                    "justify-content": "center"
                  })
                  .append(document.createTextNode("ตรวจสอบแล้ว")),
                circleClass: circleClass,
                bgColor: bgColor
              };
            }
            if (Approvestatus === "cancel") {
              circleClass = "bg-red-700";
              bgColor = "bg-red-400";
              return {
                circle: $("<div>")
                  .css({
                    display: "flex",
                    padding: "5px 3px",
                    border: "1px solid red",
                    color: "red",
                    gap: "7px",
                    "align-items": "center",
                    "justify-content": "center"
                  })
                  .append(document.createTextNode("ยกเลิกสิทธิ์")),
                circleClass: circleClass,
                bgColor: bgColor
              };
            }
            return Approvestatus;
          }
          // $.ajax(customerTrade).done(function (response) {
          //   console.log(response);
          //   response.forEach(function (Trading) {
          //     if (selectedMerchandiseId === Trading.merchandise_id) {
          //       const merchandiseid = Trading.merchandise_id;
          //       console.log(selectedMerchandiseId, merchandiseid);
          //       const alttrade = Trading.trade_number;
          //       const Trade_id = Trading.trade_id;
          //       console.log(alttrade, Trade_id);
          //     }
          //   });
          // });

          // Api 204 All GetOrder

          let GetOrders = {
            url: `https://games.myworld-store.com/api/orders/customer/${customer_id}`,
            method: "GET",
            timeout: 0,
            maxBodyLength: Infinity,
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDUzMzYzNDR9.g0VSsvTajlOr_FsNiQBTuCbIUM-O24R5jCwREc_9eP0"
            }
          };
          try {
            $.ajax(GetOrders)
              .done(function (response) {
                if (Array.isArray(response)) {
                  response.forEach(function (order, index) {
                    order.orderItems.forEach(function (item) {
                      let Shoptype = order.orderType;
                      const Shipmentstatus = getStatusElement(
                        order.shipmentStatus
                      ); // Adjust this function to return a string based on shipmentStatus
                      statusText = Shipmentstatus.Shipments.text();
                      let ShipmentCircle = Shipmentstatus.ShipmentClass;
                      let bgShipment = Shipmentstatus.bgColor;
                      let ShipmemtText = "";
                      if (bgShipment === "bg-red-400") {
                        ShipmemtText = "text-white";
                      }
                      const orderContent = `
                              <div class="grid border-[#DBDBDB] gap-2 shadow-lg px-3 py-6 mb-6">
                                  <div class="flex justify-between">
                                      <div class="flex gap-2">
                                          <p class="text-[#B3B3B3] text-xl">Order :</p> <p class="text-xl">${order.orderNumber}</p>
                                      </div>
                                          <div class="flex gap-1 items-center ${bgShipment} rounded-full py-1 px-2">
                                            <div class="${ShipmentCircle} h-4 w-4 rounded-full"></div>
                                            <h1 class="${ShipmemtText}">${statusText}</h1>
                                            </div>
                                  </div>
                                  <div class="flex gap-2">
                                      <p class="text-[#B3B3B3] text-xl">Name :</p> <p class="text-xl">${profile.displayName}</p>
                                  </div>
                                  <div class="flex gap-2">
                                      <p class="text-[#B3B3B3] text-xl">Product :</p> <p class="text-xl">${item.name} </p>
                                  </div>
                                  <div class="flex justify-between">
                                      <div class="flex gap-2">
                                          <p class="text-[#B3B3B3] text-xl">Amount :</p> <p class="text-xl">${item.quantity} ชิ้น</p>
                                      </div>
                                      <div class="flex items-center gap-2">
                                          <p class="text-[#B3B3B3] text-xl">Price (THB) :</p>
                    
                                              <h1 class="font-semibold text-xl">${order.totalPrice}.00</h1>
                                         
                                      </div>
                                  </div>
                              </div>
                          `;
                      let Time = moment
                        .tz(order.updated_at, "Asia/Bangkok")
                        .format("DD/MM/YYYY HH:mm:ss");
                      if (Shoptype === "storefront") {
                        Shoptype = "ร้านโชห่วย";
                      }

                      const StoreFront = `
                           <div class="grid border-[#DBDBDB] gap-2 shadow-lg px-3 py-6 mb-6">
                                  <div class="flex justify-between">
                                      <div class="flex gap-2">
                                          <p class="text-[#B3B3B3] text-xl">Order :</p> <p class="text-xl">${order.orderNumber}</p>
                                      </div>
                                          <div class="flex gap-1 items-center ${bgShipment} rounded-full py-1 px-2">
                                            <div class="${ShipmentCircle} h-4 w-4 rounded-full"></div>
                                            <h1 class="${ShipmemtText}">${statusText}</h1>
                                            </div>
                                  </div>
                                  <div class="flex gap-2">
                                      <p class="text-[#B3B3B3] text-xl">Product :</p> <p class="text-xl">${item.name}</p>
                                  </div>
                                  <div class="flex gap-2">
                                      <p class="text-[#B3B3B3] text-xl">Date :</p> <p class="text-xl">${Time} </p>
                                  </div>
                                  <div class="flex justify-between">
                                      <div class="flex gap-2">
                                          <p class="text-[#B3B3B3] text-xl">ช่องทาง :</p> <p class="text-xl">${Shoptype}</p>
                                      </div>
                                    
                                  </div>
                              </div>
                          `;
                      if (Shoptype) {
                        $("#OrderHistory").append(StoreFront);
                      } else {
                        $("#OrderHistory").append(orderContent);
                      }
                    });
                  });
                }
              })
              .fail(function (jqXHR, textStatus, errorThrown) {
                console.error("AJAX request failed:", textStatus, errorThrown);
              });
          } catch (e) {
            console.log(e);
          }

          function getStatusElement(status) {
            // Create the status circle element

            let ShipmentClass;
            let bgColor;
            // Depending on the status, change the color of the circle
            if (status === "SHIPMENT_READY") {
              ShipmentClass = "bg-[#F1BC00]";
              bgColor = "bg-[#F4EBCB]";
              return {
                Shipments: $("<div>")
                  .css({
                    display: "flex",
                    padding: "5px 3px",
                    border: "1px solid red",
                    color: "red",
                    gap: "7px",
                    "align-items": "center",
                    "justify-content": "center"
                  })
                  .append(document.createTextNode("เตรียมจัดส่ง")),
                ShipmentClass: ShipmentClass,
                bgColor: bgColor
              };
            } else if (status === "ON_DELIVERY") {
              ShipmentClass = "bg-[#F1BC00]";
              bgColor = "bg-[#F4EBCB]";
              return {
                Shipments: $("<div>")
                  .css({
                    display: "flex",
                    padding: "5px 3px",
                    border: "1px solid red",
                    color: "red",
                    gap: "7px",
                    "align-items": "center",
                    "justify-content": "center"
                  })
                  .append(document.createTextNode("กำลังจัดส่ง")),
                ShipmentClass: ShipmentClass,
                bgColor: bgColor
              };
            } else if (status === "SHIPPED_ALL") {
              ShipmentClass = "bg-[#1FD831]";
              bgColor = "bg-[#CBF4CC]";
              return {
                Shipments: $("<div>")
                  .css({
                    display: "flex",
                    padding: "5px 3px",
                    border: "1px solid red",
                    color: "red",
                    gap: "7px",
                    "align-items": "center",
                    "justify-content": "center"
                  })
                  .append(document.createTextNode("จัดส่งแล้ว")),
                ShipmentClass: ShipmentClass,
                bgColor: bgColor
              };
            }
            if (status === "PENDING") {
              ShipmentClass = "bg-[#F1BC00]";
              bgColor = "bg-[#F4EBCB]";
              return {
                Shipments: $("<div>")
                  .css({
                    display: "flex",
                    padding: "5px 3px",
                    border: "1px solid red",
                    color: "red",
                    gap: "7px",
                    "align-items": "center",
                    "justify-content": "center"
                  })
                  .append(document.createTextNode("รอดำเนินการ")),
                ShipmentClass: ShipmentClass,
                bgColor: bgColor
              };
            }
            if (status === "NO_SHIPMENT") {
              ShipmentClass = "bg-red-700";
              bgColor = "bg-red-400";
              return {
                Shipments: $("<div>")
                  .css({
                    display: "flex",
                    padding: "5px 3px",
                    border: "1px solid red",
                    color: "red",
                    gap: "7px",
                    "align-items": "center",
                    "justify-content": "center"
                  })
                  .append(document.createTextNode("ยังไม่จัดส่ง")),
                ShipmentClass: ShipmentClass,
                bgColor: bgColor
              };
            }
          }
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error("Error processing profile:", error);
    }
  } catch (error) {
    console.error("Error during AJAX request:", error);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  try {
    await liff.init({
      liffId: LiffID,
      withLoginOnExternalBrowser: true
    }).then(() => {
      liff.ready.then(async () => {
        if (liff.isInClient() || liff.isLoggedIn()) {
          await fetchUserProfile();
        } else {
          await liff.login({
            redirectUri: LiffUrl
          });
        }
      });
    });
  } catch (error) {
    console.error("Error initializing LIFF:", error);
    alert("Error initializing app. Please try again.");
  }
});