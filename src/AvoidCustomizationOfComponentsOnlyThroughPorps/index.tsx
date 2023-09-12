import React from "react";

// const Index: React.FC<IndexProps> = ({}) => {
//   return (<div></div>)
// }

// export default Index;

// Hard to extend for new use cases
// What happens if we need to
// display a cutom icon
// or to display the icon in the opposite position

{
  /* <Alert
  header="Upps an error occurred"
  variant="error"
  icon="error"
  description="Seems like an error happened"
/>; */
}

//if we need to add a different icon we just..

{
  /* <Alert statuts="error" />
  <Icon/>
  <Alert.Title >Your browser is outdated!<Alert.Title />
  <Alert.Description>Your Volunteer Hub experience may be degraded</Alert.Description>
</Alert>; */
}

const Index = () => {
  return (
    <>
      <Alert status="error">
        <Icon />
        <Alert.Title>Your browser is outdated!</Alert.Title>
        <Alert.Description>
          Your Volunteer Hub experience may be degraded
        </Alert.Description>
      </Alert>
    </>
  );
};

export default Index;

const Alert = ({
  status,
  children,
}: {
  status: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className={status}>{children}</div>
    </>
  );
};

Alert.Title = function AlertTitle({ children }: { children: React.ReactNode }) {
  return <span className="alert-title">{children}</span>;
};

Alert.Description = function AlertDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <span className="alert-description">{children}</span>;
};

function Icon() {
  return <span className="alert-icon">Icon</span>;
}
