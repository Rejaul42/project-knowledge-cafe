import image from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between m-4 p-4 border-b-2'>
            <h1 className='text-5xl font-bold'>Knowledge Cafe</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default Header;