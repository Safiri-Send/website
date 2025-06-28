import { ArrowRight } from "lucide-react";

const devices = [
  {
    label: "Java phone",
    active: true,
    gradient: "linear-gradient(90deg, #BFAAFF 0%, #753DEF 100%)",
    text: "#fff",
    arrowBg: "#fff",
    arrowColor: "#753DEF",
    boxShadow: "0px 4px 16px 0px #753DEF1A",
    border: "2px solid #BFAAFF",
  },
  {
    label: "iOS Devices",
    active: false,
    gradient: "linear-gradient(90deg, #F2F2F2 0%, #CBCBCB 100%)",
    text: "#A1A1AA",
    arrowBg: "#fff",
    arrowColor: "#A1A1AA",
    boxShadow: "0px 4px 16px 0px #1018280A",
    border: "none",
  },
  {
    label: "Android Devices",
    active: false,
    gradient: "linear-gradient(90deg, #F2F2F2 0%, #CBCBCB 100%)",
    text: "#A1A1AA",
    arrowBg: "#fff",
    arrowColor: "#A1A1AA",
    boxShadow: "0px 4px 16px 0px #1018280A",
    border: "none",
  },
  {
    label: "Web app",
    active: false,
    gradient: "linear-gradient(90deg, #F2F2F2 0%, #CBCBCB 100%)",
    text: "#A1A1AA",
    arrowBg: "#fff",
    arrowColor: "#A1A1AA",
    boxShadow: "0px 4px 16px 0px #1018280A",
    border: "none",
  },
];

export default function DeviceCompatibility() {
  return (
    <section
      className="w-full min-h-[300px] flex flex-col items-center justify-center bg-[#FAFAFC]"
      style={{ paddingTop: 0, paddingBottom: 0 }}
    >
      <div
        className="flex flex-col items-center justify-center mx-auto w-full max-w-[590px] h-[144px]"
      >
        <h2
          className="font-inter font-bold text-center text-[#1B1F28] text-[64px] leading-[72px] tracking-[-0.02em] w-full max-w-[590px] h-[144px] flex flex-col items-center justify-center font-extrabold"
        >
          <span className="block">Receive and send</span>
          <span className="block">with any device</span>
        </h2>
      </div>
      <div
        className="mt-8 grid w-full max-w-[900px] mx-auto justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32"
        style={{ minHeight: 56 }}
      >
        {devices.map((device) => (
          <button
            key={device.label}
            className={`flex items-center justify-between rounded-[12px] font-inter font-semibold transition w-full min-w-[220px] max-w-[220px] h-[64px] px-6 shadow-md border text-[16px] ${device.active ? "bg-gradient-to-r from-[#BFAAFF] to-[#753DEF] text-white border-[#BFAAFF] shadow-[0_4px_16px_0_#753DEF1A]" : "bg-gradient-to-r from-[#F2F2F2] to-[#CBCBCB] text-[#A1A1AA] border-none shadow-[0_4px_16px_0_#1018280A]"}`}
            style={{ justifySelf: "center", transition: "box-shadow 0.2s, border 0.2s, background 0.2s" }}
          >
            <span className={device.active ? "text-white" : "text-[#A1A1AA]"} style={{fontSize: '16px', lineHeight: '1', display: 'flex', alignItems: 'center'}}>{device.label}</span>
            <span
              className="flex items-center justify-center bg-white rounded-full w-8 h-8 ml-3"
              style={{ boxShadow: device.active ? "0px 2px 8px 0px #753DEF1A" : "none", transition: "box-shadow 0.2s" }}
            >
              <ArrowRight
                size={20}
                color={device.active ? "#753DEF" : "#A1A1AA"}
                strokeWidth={2.5}
              />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
