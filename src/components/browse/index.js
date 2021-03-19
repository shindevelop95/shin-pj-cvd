import React from 'react';
import {Container,Left,Right,Header, SubHeader} from './styles/browse'
import {Card,CardContent} from "@material-ui/core"

export default function Browse({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Browse.Left = function BrowseLeft({children,...restProps}){
    return <Left {...restProps}>{children}</Left>
}

Browse.Right = function BrowseRight({children,...restProps}){
    return <Right {...restProps}> 
                <Card>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            </Right>
}

Browse.Header = function BrowseHeader({children,...restProps}){
    return <Header {...restProps}>{children}</Header>
}

Browse.SubHeader = function BrowseSubHeader({children,...restProps}){
    return <SubHeader {...restProps}>{children}</SubHeader>
}
