import UFMSLogo from "../assets/images/ufms_logo.png";
import EEPMarioAlencarLogo from "../assets/images/eeep_mario_alencar.png";
import ImageIcon from "./common/imageIcon";

export default function Education() {
  return (
    <div className="shadow-md border py-4 px-5 bg-white">
      <div className="mb-2">
        <p className="font-semibold"> Educação </p>
      </div>

      <div className="space-y-2.5">
        <div className="flex gap-2">
          <ImageIcon src={UFMSLogo} alt="UFMS_log" />

          <div className="flex-1">
            <p className="font-normal">Universidade Federal do Mato Grosso do Sul</p>
            <p className="text-sm text-gray-600">
              Tecnologia da Informação, Tecnólogo
            </p>
            <p className="text-gray-600 text-sm  mt-1 ">Fev 2023 - Dez 2025</p>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-200 rounded"/> 

        <div className="flex gap-2">
          <ImageIcon src={EEPMarioAlencarLogo} alt="UFMS_log" />

          <div className="flex-1">
            <p className="font-normal">EEEP Mário Alencar</p>
            <p className="text-sm text-gray-600">
              Redes de computadores, Técnico Integrado
            </p>
            <p className="text-gray-600 text-sm  mt-1 ">Fev 2020 - Dez 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
