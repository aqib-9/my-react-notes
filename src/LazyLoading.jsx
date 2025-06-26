function Lazy(){
    return(
        <div>
            <h1>A very Large file That don't needed now but react automatically loads it consuming lot of time
                so we can use lazy loading that only load this file when we want not aoutomatically
                to lazy load we just have to import larget size component something differently in our App.jsx file
            </h1>
        </div>
    )
};

export default Lazy;
