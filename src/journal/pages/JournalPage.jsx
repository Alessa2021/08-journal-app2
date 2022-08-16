

import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"




export const JournalPage = () => {
  return (
    <>
    <JournalLayout>

       <NothingSelectedView />
      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>
          <AddOutlined sx={{ fontSize: 30}} />

      </IconButton>
 
    {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt accusamus dolore, facere aperiam esse, aut delectus, libero eum itaque deleniti consequuntur in culpa iure eligendi cum quibusdam placeat provident dolorem.</Typography> */}

    {/* NothinSelected */}
   
  {/*   <NoteView /> */}

    </JournalLayout>
     
   
    </>
   
  )
}
