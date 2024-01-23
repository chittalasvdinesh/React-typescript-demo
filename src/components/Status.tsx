 type StatusProps={
    status:"loading" | "successful" | "error";
 }
 const Status=(props:StatusProps)=>{
    let message;

  if(props.status==="loading") message="Data Loading..." 
  else if(props.status==="successful") message="Data Fetched Successfully"
  else message="Error While fetching Data"

    return <>
   <h2>Status-{message}</h2>
    </>
};

export default Status;