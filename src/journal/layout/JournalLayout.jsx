import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components"

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display:'flex'}}>

        <NavBar drawerWidth={ drawerWidth } />

        {/* navbar */}
        <NavBar drawerWidth={ drawerWidth } />

        {/* Sidebar */}
        <SideBar drawerWidth={ drawerWidth } />

        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3}}
        >
            {/* toolbar */}
            <Toolbar />
            { children }

        </Box>
      
    
    
    
    
    
    
    
    
    
    
    
    </Box>
  )
}
