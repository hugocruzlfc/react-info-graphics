import React from "react";

export interface IndexProps {}

const ExpensiveComponent: React.FC = () => {
  return <div>ExpensiveComponent</div>;
};

const BackgtoundPicker: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [background, setBackground] = React.useState("red");

  const onChangeBackground = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBackground(event.target.value);
  };

  return (
    <div style={{ background }}>
      <input
        value={background}
        onChange={onChangeBackground}
      />
      <div style={{ background }}>Try changin the background!</div>
      {children}
    </div>
  );
};

const Index: React.FC<IndexProps> = () => {
  //   const [background, setBackground] = React.useState("red");

  //   const onChangeBackground = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setBackground(event.target.value);
  //   };
  //   return (
  //     <div>
  //       <input
  //         value={background}
  //         onChange={onChangeBackground}
  //       />
  //       <div style={{ background }}>Try changin the background!</div>
  //       <ExpensiveComponent />
  //       // cada vez q cambie el background se renderiza este componente
  //     </div>
  //   );
  return (
    <BackgtoundPicker>
      <ExpensiveComponent />
    </BackgtoundPicker>
  );
};

export default Index;
