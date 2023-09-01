import "../../assets/styles/Loading.css";

// const Loading = () => {
//   return <div className="loading">Loading&#8230;</div>;
// };

// export default Loading;

export default function Loading() {
  return (
    <>
      <div className="loading_container">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
        {/* <div className="loader"></div> */}
      </div>
      <div className="loadingBg"></div>
    </>
  );
}
