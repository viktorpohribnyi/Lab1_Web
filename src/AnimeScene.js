import React from 'react';

const scenes = [
  {
    name: "Селище Прихованого Листа (Коноха)",
    description:
      "Коноха, або Селище Прихованого Листа, є одним з п'яти Великих селищ ніндзя. Це місце, де живуть головні персонажі серіалу. Селище відоме своєю могутньою ніндзя-силою та довгою історією.",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Hidden_Leaf_Village.png",
  },
  {
    name: "Долина Закінчення",
    description:
      "Це місце знамените своїми величезними статуями Хашірами Сендю і Мадари Учіха. Долина була місцем фінальної битви між цими двома легендарними ніндзя та стала символом їхньої ворожнечі.",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9d/Valley_of_the_End.png",
  },
  {
    name: "Ліс Смерті",
    description:
      "Ліс Смерті — це місце для другого іспиту на Чуніна. Цей ліс відомий своєю небезпекою: тут живуть багато отруйних рослин та агресивних тварин. Багато ніндзя використовують це місце для тренувань.",
    image: "https://i.pinimg.com/originals/88/78/56/887856942b1036da7d33f982e5e482db.jpg",
  },
  {
    name: "Печера Учіха",
    description:
      "Печера Учіха — це секретне місце, приховане глибоко в горах, де зберігаються таємниці клану Учіха. Тут розташований Камінь Ненависті, на якому записана історія клану та його прокляття.",
    image: "https://i.pinimg.com/originals/c9/8b/96/c98b9615bf3dce601d50cfdd585c8e8a.jpg",
  },
  {
    name: "Академія Ніндзя",
    description:
      "Академія Ніндзя в Коноха — це місце, де майбутні ніндзя вивчають основи бойових мистецтв, стратегії та історії. Це перший крок для кожного, хто хоче стати ніндзя.",
    image: "https://i.pinimg.com/originals/2f/6f/8f/2f6f8f6d346af06dfb5bc2cf3991c748.jpg",
  },
];

function AnimeScene() {
  return (
    <div className="anime-scenes">
      <h2>Відомі місця з аніме "Naruto"</h2>
      {scenes.map((scene, index) => (
        <div key={index} className="scene">
          <h3>{scene.name}</h3>
          <p>{scene.description}</p>
          <img
            src={scene.image}
            alt={scene.name}
          />
        </div>
      ))}
    </div>
  );
}

export default AnimeScene;