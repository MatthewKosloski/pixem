import * as React from 'react';

import { Column, Row } from '@atoms';

import { Title, Container, Separator } from '../../Home/Styles';
import UsageItem from './UsageItem';

export default () => {
    return (
        <Container id="usage">
            <Row>
                <Title>How to use Pixem</Title>
            </Row>
            <Row>
                <Column 
                    width={[1, 1/2]} 
                    order={[1, 1]}>
                    <UsageItem
                        number="01."
                        title="Paste in your stylesheet"
                        text="The style sheet should contain pixel values to be converted to either REMs or EMs."
                    />
                </Column>
                <Column 
                    width={[1, 1/2]} 
                    order={[4, 2]}>
                    <UsageItem
                        number="04."
                        title="Choose conversion unit"
                        text="Choose a unit to convert pixel values to—em or rem.  The former is relative to the font-size of the direct parent and the latter is relative to the font-size of the root element."
                    />
                </Column>
                <Column 
                    width={[1, 1/2]} 
                    order={[2, 3]}>
                    <UsageItem
                        number="02."
                        title="Set base pixel size"
                        text="This should be the top-level font-size on your webpage.  The default for most web browsers is 16 pixels."
                    />
                </Column>
                <Column 
                    width={[1, 1/2]} 
                    order={[5, 4]}>
                    <UsageItem
                        number="05."
                        title="Specify the affected properties"
                        text="Indicate which CSS properties should be converted by typing in a list of comma-separated properties (e.g., “font, font-size”).  If the field is empty, all properties will be affected by the conversion."
                    />
                </Column>
                <Column 
                    width={[1, 1/2]} 
                    order={[3, 5]}>
                    <UsageItem
                        number="03."
                        title="Preserve original values"
                        text="Check whether to preserve original values with CSS comments.  This simply means that the original pixel value before the conversion is preserved in a comment next to the converted value."
                    />
                </Column>
                <Column
                    width={[1, 1/2]} 
                    order={[6, 6]}>
                    <UsageItem
                        number="06."
                        title="Copy the converted stylesheet"
                        text="Copy the converted stylesheet to your clip board.  The result can be found in the text area that is right next to the input."
                    />
                </Column>
            </Row>
            <Row>
                <Column width={1}>
                    <Separator />
                </Column>
            </Row>
        </Container>
    );
}