import Image from "next/image";

import img1 from "../public/1.png";
import img2 from "../public/2.png";
import img3 from "../public/3.png";
import img4 from "../public/4.png";
import img6 from "../public/6.png";
import img7 from "../public/7.png";

export default function Home() {
  return (
    <ul
      style={{
        padding: 0,
      }}
    >
      <li>
        <Image
          src={img1}
          alt="Img"
          layout="responsive"
          style="display: block;"
        />
      </li>
      <li>
        <Image
          src={img2}
          alt="Img"
          layout="responsive"
          style="display: block;"
        />
      </li>
      <li>
        <Image
          src={img3}
          alt="Img"
          layout="responsive"
          style="display: block;"
        />
      </li>
      <li>
        <Image
          src={img4}
          alt="Img"
          layout="responsive"
          style="display: block;"
        />
      </li>
      <li>
        <Image
          src={img6}
          alt="Img"
          layout="responsive"
          style="display: block;"
        />
      </li>
      <li>
        <Image
          src={img7}
          alt="Img"
          layout="responsive"
          style="display: block;"
        />
      </li>
    </ul>
  );
}
