import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Input from '@/components/ui/input';
import Checkbox from '@/components/ui/checkbox';
import Button from '@/components/ui/button';

const loginSliderInfo = [
  {
    id: 1,
    img: '/images/8.png',
    title: 'Device မျိုးစုံနဲ့ အရောင်းစတင် လိုက်ပါ',
  },
  {
    id: 2,
    img: '/images/17.png',
    title: ' သင့်လုပ်ငန်းတွက် အသင့်တော်ဆုံး',
  },
  {
    id: 3,
    img: '/images/agency-dark.png',
    title: 'Pico SBS ကိုသုံး',
  },
];

const loginFormItems = [
  {
    name: 'username',
    placeholder: 'Username',
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  },
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
};

function Login() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full max-w-6xl items-center justify-between px-4 lg:px-10">
        <div className="hidden max-w-[50%] flex-1 md:block">
          <Slider {...settings}>
            {loginSliderInfo.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img
                      src={item.img}
                      width={1000}
                      height={1000}
                      alt="image"
                      className="mb-8 block h-full w-[150px] lg:w-[300px]"
                    />
                  </div>
                  <h1 className="text-xl text-base-500">{item.title}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mx-auto w-[90%] text-center lg:mx-0 lg:w-[40%]">
          <h4 className="text-lg font-medium tracking-wide">PICO ERP</h4>
          <p className="mt-1 text-base-400">Login To Dashboard</p>
          <form className="mt-4 flex flex-col gap-6">
            {loginFormItems.map((item) => {
              return (
                <Input
                  key={item.name}
                  name={item.name}
                  placeholder={item.placeholder}
                  type={item.type || 'text'}
                />
              );
            })}
            <Checkbox labelText="Remember me" />
            <div className="flex w-full items-center">
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
