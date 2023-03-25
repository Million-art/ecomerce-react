import styled from "@emotion/styled"

const Container=styled.div`
height:30px;
 color:black;
display:flex;
justify-content:center;
align-items: center;
font-size: 14px;
`
export const Announcement = () => {
  return (
    <div>
        <Container>
            Super deal! free shopping on order over $50
        </Container>
    </div>
  )
}
