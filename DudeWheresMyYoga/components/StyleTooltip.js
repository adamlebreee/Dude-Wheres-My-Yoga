import React from "react";
import { View, Text } from "react-native";

const styleInfo = {
    Vinyasa: 'Vinyasa Yoga offers both physical and mental benefits by promoting flexibility, strength, and balance while simultaneously reducing stress and enhancing mindfulness through rhythmic breathing and flowing movement sequences. Its dynamic and creative nature keeps the practice engaging and can foster a sense of tranquility and presence, supporting overall wellness and mental clarity.',
    Hatha: 'Hatha Yoga, through its slow- paced and gentle approach, can greatly improve flexibility, strength, and balance, while its emphasis on breath work and meditation contributes to stress reduction and increased mental clarity.The focus on individual postures can aid in better body alignment, improved physical awareness, and foster a deeper understanding of yoga fundamentals, making it beneficial for both beginners and those seeking a more contemplative practice.',
    Ashtanga: 'Ashtanga Yoga, with its rigorous and structured sequence of poses, can significantly boost strength, flexibility, and stamina, while cultivating discipline and focus. The synchronisation of breath and movement in this method can enhance internal heat, which helps in detoxification, resulting in improved circulation, a light, strong body and a calm mind.',
    Bikram: 'Bikram Yoga, performed in a heated room, promotes extensive sweating which aids in detoxification, and the increased warmth allows for deeper stretching and reduced risk of injury. The fixed sequence of 26 postures and two breathing exercises enhances flexibility, strength, and balance while also improving cardiovascular health, concentration, and stress management.',
    Aerial: 'Aerial Yoga combines traditional yoga poses with elements of aerial arts, providing a full- body workout that improves strength, flexibility, and balance, while allowing for deeper stretches and alignment corrections with the support of the hammock.The unique nature of suspended movements in this practice can also enhance mental focus, reduce stress, improve mood, and offer the opportunity for inversions, which are beneficial for spinal health and circulation, without putting excessive pressure on the neck and spine.',
    Jivamukti: 'Jivamukti Yoga, incorporating physical postures, meditation, and ethical principles, offers a holistic approach to wellness, promoting strength, flexibility, and balance, while fostering spiritual growth and a sense of unity with all beings. This form of yoga encourages a deeper understanding of the self and ones relationship with the environment, enhancing mental clarity, reducing stress, and cultivating compassion and mindfulness in daily life.',
    Beer: 'Beer Yoga is a novel approach to the practice that combines the mindfulness of yoga with the casual relaxation of beer-drinking, offering a unique way to promote social interaction and make the discipline more approachable for newcomers. While it may not offer the full spectrum of traditional yoga benefits, it encourages balance and concentration by incorporating the act of holding and sipping beer into yoga poses, and the social, light-hearted atmosphere can be a fun stress-reliever.',
};

const StyleTooltip = ({ selectedStyle }) => {
    return (
        <View>
            <Text>{styleInfo[selectedStyle]}</Text>
        </View>
    );
}

export default StyleTooltip;
    
