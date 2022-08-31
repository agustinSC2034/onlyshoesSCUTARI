const CartWidget = () => {
    const amount = 5;
    return(
        <>
        <img 
        style={{width: 40}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP8a65B8V3WAVk7HPgU34BVR6nrGQtXzG1Ht4Cr_czPU92NyID8vX13hmtQE3eVpYKGc&usqp=CAU" alt="Carrito de compras" />
        {amount}
    </>
    );
    }

export default CartWidget