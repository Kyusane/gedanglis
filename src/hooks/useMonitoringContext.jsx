import { MonitoringContext } from "../context/MonitoringContext";
import { useContext } from "react";

export const useMonitoringContext = () => {
     const context = useContext(MonitoringContext)
     if (!context) {
          throw Error('useAuthContext must be inside an MonitoringContextProvider')
     }
     return context
}