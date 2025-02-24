
type Props = {
    children: React.ReactNode;
}

const AuthLayout = ({children}: Props) => {
    return ( 
        <div className="flex items-center justify-center h-screen">
            <h1>this is code</h1>
            {children}
        </div>
     );
}
 
export default AuthLayout;
