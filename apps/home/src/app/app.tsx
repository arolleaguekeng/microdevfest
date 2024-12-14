import ReactDOM from 'react-dom';
export function App() {
  return (
    <div>
      <div
        className="hero-con pr-4 pt-4 mt-16 flex flex-col relative lg:h-[70vh] xl:h-[80vh] md:flex-col sm:flex-col lg:flex-row md:overflow-hidden"
        style={{
          height: '80vh',
          overflow: 'hidden',
        }}
      >
        <div
          className="lg:w-[60%] sm:w-full sm:flex"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div className="relative flex flex-col items-center w-full md:max-w-[80vw] xl:max-w-[65vw] mx-auto overflow-visible lg:-mt-14 xl:-mt-0">
            <div
              className="w-[100%]"
              style={{
                width: '50%',
              }}
            >
              <img
                src={'assets/images/logo-devfest/logo-devfest-2024-home.png'}
                alt="DevFest logo Douala "
                className="xl:h-[140px] md:h-[100px] w-[200px] lg:h-[100px] h-[50px]"
              />
            </div>

            <div
              className="text-white relative xl:bottom-16 flex flex-col items-center w-full justify-center xl:mt-6"
              style={{
                lineHeight: '1.5',
                marginTop: '20px',
                marginBottom: '100px',
              }}
            >
              <div className="relative w-full flex items-center justify-center">
                <div
                  className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-bold font-TiltWarp"
                  style={{
                    fontSize: '36px',
                    padding: '10px',
                    lineHeight: '1.5',
                  }}
                >
                  Back on December 7th and 14th, 2024
                </div>
              </div>
              <div className="w-full max-w-[1200px] mt-5 bg-green-200">
                <div
                  className="flex flex-col md:flex-row justify-center items-center gap-5 w-full"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '16px',
                  }}
                >
                  <p className="cursor-pointer truncate transition-all bg-green-500 text-white px-6 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    <span className="bg-red-600">Speakers</span>
                  </p>

                  <p className="cursor-pointer truncate transition-all bg-green-500 text-white px-6 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    <span>Register</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-full sm:h-1/4 z-0 w-full md:w-[40%]">
          <img
            src="../../../assets/images/home-images/file.png"
            alt="DevFest Douala Background"
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
            }}
            className="lg:w-full sm:w-4 md:w-4 pt-6 md:mt-auto object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}

export function defineReactWebComponent() {
  class ReactWebComponent extends HTMLElement {
    connectedCallback() {
      ReactDOM.render(<App />, this);
    }

    disconnectedCallback() {
      ReactDOM.unmountComponentAtNode(this);
    }
  }

  if (!customElements.get('home-react')) {
    customElements.define('home-react', ReactWebComponent);
  }
}

defineReactWebComponent();
export default App;
