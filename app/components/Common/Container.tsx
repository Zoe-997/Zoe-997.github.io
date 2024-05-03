const Container = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
    return (
        <div className={`${className? className+' ' : ''}container mx-auto px-[15px]`}>
            {children}
        </div>
    );
}
 
export default Container;