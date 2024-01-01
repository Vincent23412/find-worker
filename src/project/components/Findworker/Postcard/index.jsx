import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Card, Fade, Link, Rating, Stack, Typography } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { fetchData } from './fetchData'
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';

function Custom_Card({need_people, total_people, poster, email, event}){
    return(
        <>
            <Card sx={{ width: "250px", height: "300px", backgroundColor: 'red'}}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} align="center">
                        {event}
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,  opacity: 0.5}} align="center"> 
                        need people
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,  opacity: 0.5 }} align="center">
                        目前{total_people}人，總共{need_people}人
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
                        <strong>
                            Contact {poster}
                        </strong>
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
                        <Link href="mailto:fdaa@gmail.com" color="inherit" underline="hover">
                            {email}
                        </Link>
                    </Typography>

                </Stack>
            </Card>
        </>
    )
}


export default function PostCard({login}){

    if (!login){
        return (
            <>
                <h1>no access to see</h1>
            </>
        )
    }

    const localData = localStorage.getItem("dataObjects")

    const [dataObjects, setDataObjects] = useState(localData && localData !== "undefined" ? JSON.parse(localData) : null)

    useEffect(() => {
        fetchData().then(
            (res) => {
                setDataObjects(res)
                // set the localStorage item, dataObjects, to the value of res, the downloaded data
                localStorage.setItem("dataObjects", JSON.stringify(res))
            }
        )

    }, [])

    const ui = dataObjects ? (
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          {dataObjects.map((e, i) => {
            return (
                <Custom_Card
                  email={e["Contact Email"]}
                  need_people={e['Vacancy Number of Teammate']}
                  poster={e['Contact Person']}
                  total_people={e['Current Number of Teammates']}
                />
            );
          })}
        </Grid>
      ) : (
        <div>loading....</div>
      );
      

    return ui
}
