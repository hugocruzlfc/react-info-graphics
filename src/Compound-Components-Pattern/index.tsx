import React from "react";
import { Dropdown } from "./context/dropdownContext";
const dataItems = [
  {
    text: "Item 1",
    icon: "icon1",
  },
  {
    text: "Item 2",
    icon: "icon2",
  },
];

export default function CompoundComponentsPatterns() {
  //   return (
  //     <Dropdown
  //       items={dataItems}
  //       text="Solution"
  //       footerHeading="Documentations"
  //       footerDesc="Start Integrating product and tools"
  //       showIcons={true}
  //       hasFooter={true}
  //     />
  //   );

  return (
    <>
      <h2>Hi I am a Compound Component 😋 </h2>
      <Dropdown>
        <Dropdown.Button>Dropdown Button</Dropdown.Button>
        <Dropdown.List>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.List>
        <Dropdown.Footer>
          <h3>Documentations</h3>
          <p>Start Integrating product and tools</p>
        </Dropdown.Footer>
      </Dropdown>
    </>
  );
}

// function Dropdown({
//   text,
//   hasFooter,
//   footerHeading,
//   footerDesc,
//   showIcons,
//   items,
// }: {
//   text: string;
//   hasFooter: boolean;
//   footerHeading: string;
//   footerDesc: string;
//   showIcons: boolean;
//   items: typeof dataItems;
// }) {
//   return (
//     <>
//       <button>{text}</button>
//       <div>
//         {items.map((item) => (
//           <div>
//             {showIcons && <img src={item.icon} />}
//             {item.text}
//           </div>
//         ))}
//       </div>
//       {hasFooter && (
//         <div>
//           <h3>{footerHeading}</h3>
//           <p>{footerDesc}</p>
//         </div>
//       )}
//     </>
//   );
// }
