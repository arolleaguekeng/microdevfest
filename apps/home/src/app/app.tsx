import ReactDOM from 'react-dom';
export function App() {
  return (
    <div>
      <div className="pr-4 pt-4 mt-16 flex flex-col relative lg:h-[70vh] xl:h-[80vh] md:flex-col sm:flex-col lg:flex-row md:overflow-hidden">
        <div className="z-50"></div>
        <div className="lg:w-[60%] sm:w-full sm:flex">
          <div className="relative flex flex-col items-center w-full md:max-w-[80vw] xl:max-w-[65vw] mx-auto overflow-visible lg:-mt-14 xl:-mt-0">
            <div className="">
              <img
                src={'assets/images/logo-devfest/logo-devfest-2024-home.png'}
                alt="DevFest logo Douala "
                className="xl:h-[140px] md:h-[100px] lg:h-[100px] h-[50px]"
              />
            </div>

            <div className="text-white relative xl:bottom-16 flex flex-col items-center w-full justify-center xl:mt-6">
              <div className="relative w-full flex items-center justify-center">
                <div className="text-[28px] md:text-[25px] lg:text-[35px] xl:text-[50px] text-center font-bold font-TiltWarp border-r-red-400">
                  Back on December 7th and 14th, 2024
                </div>
              </div>
              <div className="w-full max-w-[1200px] mt-5 bg-green-200">
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                  <a
                    href="https://docs.google.com/presentation/d/1QTZFZpuGHnft8bQyZjtigga7Fn_7NA7Aih35qhZ0Qq4/edit?usp=sharing"
                    target="_blank"
                    className="cursor-pointer truncate transition-all bg-green-500 text-white px-6 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                  >
                    <span>Speakers</span>
                  </a>

                  <a
                    href="https://gdg.community.dev/events/details/google-gdg-douala-presents-devfest-2024-douala/"
                    target="_blank"
                    className="cursor-pointer truncate transition-all bg-green-500 text-white px-6 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                  >
                    <span>Register</span>
                  </a>
                </div>

                <div className="flex lg:flex-row md:flex-row sm:flex-row justify-center items-center gap-5 mt-8 z-0">
                  <a
                    href="https://www.youtube.com/@GDGDouala"
                    className="button relative inline-flex items-center justify-center overflow-hidden text-gray-900 bg-white rounded-[30px] shadow-md group"
                  >
                    <span className="button-decor absolute inset-0 bg-green-500 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 z-0"></span>
                    <div className="button-content relative flex items-center z-10">
                      <div className="button__icon w-12 h-10 bg-green-500 grid place-items-center">
                        <img
                          src="assets/icons/logo-youtube.svg"
                          alt="Vidéos"
                          className="w-6 h-6"
                        />
                      </div>
                      <span className="button__text inline-block transition-colors duration-200 px-6 py-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs group-hover:text-white">
                        Videos
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://photos.app.goo.gl/gfu895bS4YuddhVc7"
                    className="button relative inline-flex items-center justify-center overflow-hidden text-gray-900 bg-white rounded-[30px] shadow-md group"
                  >
                    <span className="button-decor absolute inset-0 bg-green-500 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 z-0">
                      Photos
                    </span>
                    <div className="button-content relative flex items-center z-10">
                      <div className="button__icon w-12 h-10 bg-green-500 grid place-items-center">
                        <img
                          src="assets/icons/image.svg"
                          alt="Vidéos"
                          className="w-6 h-6"
                        />
                      </div>
                      <span className="button__text inline-block transition-colors duration-200 px-6 py-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs group-hover:text-white"></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-full sm:h-1/4 z-0 w-full md:w-[40%]">
          <img
            src="../../../assets/images/home-images/file.png"
            alt="DevFest Douala Background"
            className="lg:w-full sm:w-4 md:w-4 pt-6 md:mt-auto object-cover w-full"
          />
        </div>
      </div>

      <div className="description font-mono z-40">
        <img
          src="assets/images/home-images/gunn.png"
          alt=""
          className="w-full md:w-1/4 lg:w-1/4 h-auto absolute left-0 hidden md:flex lg:flex"
        />
        <div className="shadow-lg text-white bg-black bg-opacity-40 backdrop-filter backdrop-blur-none flex lg:flex-row-reverse flex-col-reverse md:flex-col-reverse justify-center items-center h-[600px] w-full gap-16 p-4">
          <div className="flex flex-col w-full md:w-full lg:w-1/3 gap-6">
            <div className="text-white text-3xl sm:text-4xl md:text-5xl tracking-wide sm:tracking-[3.2px] md:tracking-[4.8px] text-start font-bold font-TiltWarp"></div>

            <p className="text-xl"></p>
          </div>

          <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono bg-opacity-70 backdrop-filter backdrop-blur-sm shadow-lg">
            <div className="flex justify-between items-center font-mono">
              <div className="flex space-x-2 text-red-500">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p>Terminal</p>
              <p className="text-sm">bash</p>
            </div>
            <div className="mt-4 font-mono">
              <p className="text-green-400">$ devfest install -h</p>
              <p className="text-white">Installation de DevFest 2024</p>

              <p className="text-green-400 mt-4">$ devfest init</p>
              <p className="text-white">Initialisation du projet Dev</p>
              <p className="text-white">Projet Dev initialisé</p>

              <p className="text-green-400 mt-4">$ devfest config</p>
              <p className="text-white"></p>
              <p className="text-white"></p>
            </div>
          </aside>
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
