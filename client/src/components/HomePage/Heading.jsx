const Heading = () => {
    return (
        <>
            <div className="inset-x-0 top-0 h-16 m-3 align-middle">
                <h1 className="text-2xl font-bold items-center  flex justify-center ">
                    Weather Visualiser
                    <img
                        width="50px"
                        height="50px"
                        src="/sun.svg"
                        className="ml-4"
                    />
                </h1>
            </div>
        </>
    )
}

export default Heading
