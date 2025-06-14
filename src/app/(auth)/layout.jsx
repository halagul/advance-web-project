import Link from "next/link";

export default function AuthLayout({ children}){
 

   return (
       <>
     <h1>
         this is header by Authlayout
       </h1>
       <hr/>
         {children}
         <hr/>
        
     </>
   );
 }
 