import React, { useEffect, useState } from "react";

export default function Box() {
  let [list, setList] = useState([
    {
      title:
        "Perfect Quality New mobile phone M12 ultra smartphone 7.3-in android phone mobile phones cellphone",
      category: "mobile",
      price: "$50",
      image:
        "https://s.alicdn.com/@sc04/kf/Hb960e01ecd7d45dda125846f96e758d0l.jpg_960x960.jpg",
    },
    {
      title:
        "New arrival smartphone unlocked waterproof smartphone unlocked original refurbished smartphone",
      category: "mobile",
      price: "$99",
      image:
        "https://s.alicdn.com/@sc04/kf/H7690da5c2c084a91a16761f51b2de05fI.jpg_960x960.jpg",
    },
    {
      title:
        "Factory Supply hot sale smartphone cooling original smartphone mobile phone android phones 5g lte smartphone",
      category: "mobile",
      price: "$55",
      image:
        "https://s.alicdn.com/@sc04/kf/H28da50f21f0c4d75b64d0bab053697c3Q.jpg_960x960.jpg",
    },
    {
      title:
        "For Samsung mobile phone used Galaxy S7 S7 edge S8 S9 S9plus S10 S20 S21 used cell phones smartphones",
      category: "mobile",
      price: "$550",
      image:
        "https://s.alicdn.com/@sc04/kf/H4bfbe02420974eeeab977c197dfb7747i.jpg_960x960.jpg",
    },
    {
      title:
        "Second hand mobile phones used 6 6s 7 7s 7 plus 8 8plus X XR XS 11 11pro 12 12pro second hand used smart phone",
      category: "mobile",
      price: "$55",
      image:
        "https://s.alicdn.com/@sc04/kf/H2a67114288514e0da67fd2e1029081afC.jpg_960x960.jpg",
    },
    {
      title:
        "MX7212 Wood Copy Shaper Machine Automatic Copying Shaper Woodworking Furniture Copy Shaping Machine",
      category: "Machinery",
      price: "$155",
      image:
        "https://s.alicdn.com/@sc04/kf/H87b739f3f6a449d9846bef30c6ff39cez.jpg_960x960.jpg",
    },
    {
      title:
        "Good Price Spindle Moulder Pinliang 2.2kw Wood Shaper Moulding machine",
      category: "Machinery",
      price: "$200",
      image:
        "https://s.alicdn.com/@sc04/kf/H31fb00aba7b9453a832424d8194cc673w.jpg_960x960.jpg",
    },
    {
      title:
        "Pinliang Woodworking Double Spindles Shaper MX5317 Wood Copier Spindle Moulder machine",
      category: "Machinery",
      price: "$250",
      image:
        "https://s.alicdn.com/@sc04/kf/Hce8a473fb13242aabec95bc266572d482.jpg_960x960.jpg",
    },
    {
      title:
        "MX7512 Automatic copy shaper with 2 two spindles Wood copy shaper machine",
      category: "Machinery",
      price: "$300",
      image:
        "https://s.alicdn.com/@sc04/kf/H50fcb87b137949d98a4dbfda5e2e31a81.jpg_960x960.jpg",
    },
    {
      title:
        "4inch length Auto Feeding Multi blade Rip Saw Pinliang MJ1415D Multi rip saw machine",
      category: "Machinery",
      price: "$500",
      image:
        "https://s.alicdn.com/@sc04/kf/H4e8fac643e8342308ae74cf0253481440.jpg_960x960.jpg",
    },
    {
      title:
        "New and Second Hand used car High Speed 150km/h Electric Car Vehicles Made In China New Electric Car automotives",
      category: "cars",
      price: "$450",
      image:
        "https://s.alicdn.com/@sc04/kf/H258dcdd6607842d68694b112ec0f240cr.jpg_960x960.jpg",
    },
    {
      title:
        "Fast Shipping BYD Cheap Smart Electric Cars for Sale 2022 Song Plus EV Flagship China Factory High Speed Tang Electr Vehicle SUV",
      category: "cars",
      price: "$400",
      image:
        "https://s.alicdn.com/@sc04/kf/Hdb48f5bf73d1452486af33cac307308cF.jpg_960x960.jpg",
    },
    {
      title:
        "Cheap China Manufacturer 4 Four Wheel Cheap Chinese Electric Car Xpeng G3 520 Used Cars / Xpeng Used Electric Cars",
      category: "cars",
      price: "$475",
      image:
        "https://s.alicdn.com/@sc04/kf/H26a1224c0d2c481c8cb40bf5cf5547115.jpg_960x960.jpg",
    },
    {
      title:
        "Ready to Ship Cheap BYD EV SUV Electric Cars For Sale Byd Song Plus Ev Flagship 2022 Cars for Sale New Energy Electric Vehicle",
      category: "cars",
      price: "$500",
      image:
        "https://s.alicdn.com/@sc04/kf/Hc9add9efbc1e49db8369440356dbda71s.jpg_960x960.jpg",
    },
    {
      title:
        "Electric car without driving licence speed mini electric car electric vintages cars",
      category: "cars",
      price: "$575",
      image:
        "https://s.alicdn.com/@sc04/kf/H55a81ebae8d34a599e783881ca7ed830x.jpg_960x960.jpg",
    },
    {
      title:
        "YATAI Boys black sneakers cheap comfortable running shoes wholesale",
      category: "Shoes",
      price: "$5",
      image:
        "https://s.alicdn.com/@sc04/kf/Hc69fe17bb60e448ba6b35d5f431973a1i.jpg_960x960.jpg",
    },
    {
      title:
        "autumn winter new flying woven fashion sports students' warm casual men's shoes",
      category: "Shoes",
      price: "$6",
      image:
        "https://s.alicdn.com/@sc04/kf/H78145cef801c4d4381230c42fc8a0a90v.jpg_960x960.jpg",
    },
    {
      title:
        "china wholesale factory Customize logo unbrand sport running shoes for man",
      category: "Shoes",
      price: "$7",
      image:
        "https://s.alicdn.com/@sc04/kf/Heed7b2721fc94b34ba5be78d55c8f3e3s.jpg_960x960.jpg",
    },
    {
      title:
        "sneaker manufacturer Latest Sport Breathable Leather Made White Flat Sneakers Black Casual Shoes Men and Women",
      category: "Shoes",
      price: "$8",
      image:
        "https://s.alicdn.com/@sc04/kf/H8fdd9a9b053d4c30ba29d45abdad50ecZ.jpg_960x960.jpg",
    },
    {
      title:
        "Hot Selling Industrial Cheap Genuine Leather Anti Puncture Construction Steel Toe Safety Work Shoes",
      category: "Shoes",
      price: "$9",
      image:
        "https://s.alicdn.com/@sc04/kf/Hdf9391697cd74997b3d64d86e4ffd264D.jpg_960x960.jpg",
    },
  ]);
  let [text, setText] = useState("");
  let [itemCategories, setItemCategories] = useState([]);
  let [filterListData, setFilterListData] = useState([]);
  let [style, setStyle] = useState({});
  let Categories = () => {
    let AllCategories = list.map((element) => element.category);
    AllCategories = [...new Set([...AllCategories])];
    setItemCategories([...AllCategories]);
  };
  const filterData = (e) => {
    setText(e);
    // if (e.length === 0) {
    //   console.log("done");
    //   setStyle({
    //     display: "block",
    //   });
    // } else {
    //   list.map((element) => {
    //     if (element.title.toLowerCase().includes(e.toLowerCase())) {
    //       setStyle({
    //         display: "block",
    //       });
    //     } else {
    //       console.log("nbone");

    //       setStyle({
    //         display: "none",
    //       });
    //     }
    //   });
    // }
  };
  useEffect(() => {
    Categories();
  }, []);
  return (
    <>
      <nav className="sticky">
        <span className="Navbar">
          <ul className="flex">
            <li className="AliBaba">
              <b>AliBaba</b>.com
            </li>
            <li>
              <input
                type="text"
                value={text}
                className="navBox Input"
                placeholder="What you are looking for..."
                onChange={(e) => filterData(e.target.value)}
              />
            </li>
          </ul>
        </span>
      </nav>
      <hr />
      <div className="mainBox">
        <ul className="Flex">
          {itemCategories.map((element, index) => {
            return (
              <li key={index} style={style}>
                {element}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className="Box">
          {list.map((element, index) => {
            return (
              <li className="Boxes" key={index} style={style}>
                <div className="innerBox">
                  <img className="Image" src={element.image} alt="" />
                </div>
                {element.title}
                <div className="price">Price:{element.price}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

// Working of Flat
// let a=[1,2,3,[4,5,6,7]];
// a.flat();
// (7) [1, 2, 3, 4, 5, 6, 7]    // Make two Arrays as one
