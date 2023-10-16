// import AppConfig from "@/config/app.config";
// import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";

// interface LayoutState {}

// interface ConstantsStoreState {
//   constants: LayoutState;
//   setConstant: <T extends keyof LayoutState, V extends LayoutState[T]>(
//     _key: T,
//     _value: V
//   ) => void;
// }

// const initialState: LayoutState = {};

// const useConstantStore = create<ConstantsStoreState>()(
//   devtools(
//     persist(
//       (set) => ({
//         state: initialState,
//         setState: <T extends keyof LayoutState, V extends LayoutState[T]>(
//           key: T,
//           value: V
//         ) =>
//           set((state) => ({
//             state: {
//               ...state.state,
//               [key]: value,
//             },
//           })),
//       }),
//       {
//         name: "dashboard-layout-state",
//         version: AppConfig.version,
//       }
//     )
//   )
// );

// export default useConstantStore;
