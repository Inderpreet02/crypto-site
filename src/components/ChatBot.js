import CaiWebchat from 'webchat';
import React from 'react';

function ChatBot() {
    return(
        <div>
            <CaiWebchat
                onRef={ref => {this.webchat = ref;}}
                channelId={"0b06fee7-9afe-4da9-ad50-f7eedfcbb938"}
                token={"133d65c5d4bf0c077f4af3ff11af5c66"}
                preferences={{
                    accentColor: '#E05A47',
                    complementaryColor: '#FFFFFF',
                    botMessageColor: '#707070',
                    botMessageBackgroundColor: '#F6F6F6',
                    backgroundColor: '#FFFFFF',
                    headerLogo: 'https://cdn.cai.tools.sap/webchat/webchat-logo.svg',
                    headerTitle: 'My awesome chatbot',
                    botPicture: 'https://cdn.cai.tools.sap/webchat/bot.png',
                    userPicture: 'https://cdn.cai.tools.sap/webchat/user.png',
                    onboardingMessage: 'Come speak to me!',
                    expanderLogo: 'https://cdn.cai.tools.sap/webchat/webchat-logo.svg',
                    expanderTitle: 'Click on me!',
                    conversationTimeToLive: 24,
                    openingType: 'never',
                    welcomeMessage: 'Hello world !'
                }}/>
        </div>
    );
}

export default ChatBot;

