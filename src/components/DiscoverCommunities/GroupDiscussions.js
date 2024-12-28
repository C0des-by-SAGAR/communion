import React from 'react';
import './GroupDiscussions.css';
import image1 from '../../comm-assets/Discover/group-1.avif';
import image2 from '../../comm-assets/Discover/group-2.avif';
import image3 from '../../comm-assets/Discover/group-3.webp';
import image4 from '../../comm-assets/Discover/group-4.jpg';
import image5 from '../../comm-assets/Discover/group-5.webp';
import image6 from '../../comm-assets/Discover/group-6.avif';
import image7 from '../../comm-assets/Discover/group-7.avif';
import image8 from '../../comm-assets/Discover/group-8.webp';
import image9 from '../../comm-assets/Discover/group-9.webp';
import image10 from '../../comm-assets/Discover/group-10.webp';
import image11 from '../../comm-assets/Discover/group-11.webp';
import image12 from '../../comm-assets/Discover/group-12.webp';
import image13 from '../../comm-assets/Discover/group-13.avif';
import image14 from '../../comm-assets/Discover/group-14.webp';
import image15 from '../../comm-assets/Discover/group-15.avif';
import image16 from '../../comm-assets/Discover/group-16.avif';
import image17 from '../../comm-assets/Discover/group-17.webp';
import image18 from '../../comm-assets/Discover/group-18.avif';
import image19 from '../../comm-assets/Discover/group-19.webp';
import image20 from '../../comm-assets/Discover/group-20.avif';
import image21 from '../../comm-assets/Discover/group-21.webp';
import image22 from '../../comm-assets/Discover/group-22.webp';
import image23 from '../../comm-assets/Discover/group-23.avif';
import image24 from '../../comm-assets/Discover/group-24.avif';
import image25 from '../../comm-assets/Discover/group-25.avif';
import image26 from '../../comm-assets/Discover/group-26.avif';
import image27 from '../../comm-assets/Discover/group-27.webp';
import image28 from '../../comm-assets/Discover/group-28.webp';
import image29 from '../../comm-assets/Discover/group-29.avif';
import image30 from '../../comm-assets/Discover/group-30.webp';
import image31 from '../../comm-assets/Discover/group-31.avif';
import arrow from '../../comm-assets/hero-section/arrow.png';

const GroupDiscussions = () => {
  const discussions = [
    {
      id: 1,
      title: 'Child Welfare Support',
      topic: 'Topic: Child Care',
      description: 'A space for discussing issues related to child welfare, safety, and mental well-being. The group...',
      image: image1
    },
    {
      id: 2,
      title: 'Bible Study Circle',
      topic: 'Topic: Bible Groups',
      description: 'An engaging group for those interested in exploring the teachings of the Bible. Discussions range...',
      image: image2
    },
    {
      id: 3,
      title: 'Support for the Homeless',
      topic: 'Topic: Homeless People',
      description: 'A group aimed at brainstorming ways to assist homeless individuals and families. Topics include shelter...',
      image: image3
    },
    {
      id: 4,
      title: 'Bhagavad Gita Reflections',
      topic: 'Topic: Bhagavad Gita Group',
      description: 'A community dedicated to reading and reflecting on the teachings of the Bhagavad Gita. Discussions...',
      image: image4
    },
    {
      id: 5,
      title: 'Mental Health Allies',
      topic: 'Topic: Mental Health Awareness',
      description: 'This group provides a supportive space to discuss mental health issues, share coping strategies, and...',
      image: image5
    },
    {
      id: 6,
      title: 'Elderly Care Network',
      topic: 'Topic: Elderly Support',
      description: 'A group for discussing ways to support elderly individuals, focusing on their health, comprehension, and...',
      image: image6
    },
    {
      id: 7,
      title: 'Sustainable Living Advocates',
      topic: 'Topic: Environmental Awareness',
      description: 'A community focused on discussing sustainable practices to protect the environment. Members share tips on...',
      image: image7
    },
    {
      id: 8,
      title: 'Financial Literacy and Assistance',
      topic: 'Topic: Financial Support',
      description: 'This group provides guidance on managing finances, budgeting, and understanding credit. Members discuss ways to...',
      image: image8
    },
    {
      id: 9,
      title: 'Youth Empowerment Hub',
      topic: 'Topic: Youth Development',
      description: 'A group centered on mentoring and supporting youth in their personal and professional growth. Members...',
      image: image9
    },
    {
      id: 10,
      title: 'Community Meal Care',
      topic: 'Topic: Meal Care',
      description: 'This group organizes discussions on ways to support and provide meals to those in need...',
      image: image10
    },
    {
      id: 11,
      title: 'Art and Mental Health Therapy',
      topic: 'Topic: Art Therapy and Wellness',
      description: 'A creative group that explores how art can improve mental health. Members share techniques in...',
      image: image11
    },
    {
      id: 12,
      title: 'Meditation and Mindfulness Group',
      topic: 'Topic: Mindfulness and Inner Peace',
      description: 'A safe space where members discuss practices to improve mental well-being through meditation and mindfulness...',
      image: image12
    },
    {
      id: 13,
      title: 'Meal providers for street dogs',
      topic: 'Topic: Animal Care',
      description: 'A group dedicated to providing food and care for street dogs. Members share experiences and...',
      image: image13
    },
    {
      id: 14,
      title: 'Eco Warriors',
      topic: 'Topic: Climate Change and Environmental Protection',
      description: 'Eco Warriors is a group dedicated to taking action against climate change and promoting sustainability',
      image: image14
    },
    {
      id: 15,
      title: 'Protect the nature',
      topic: 'Topic: Nature',
      description: 'This group mainly discussion about the nature',
      image: image15
    },
    {
      id: 16,
      title: 'Bird Conservation Enthusiasts',
      topic: 'Topic: Protecting Avian Species and Habitats',
      description: 'This group focuses on raising awareness about the importance of bird conservation and protecting their...',
      image: image16
    },
    {
      id: 17,
      title: 'Health Group Care',
      topic: 'Topic: Health',
      description: 'Welcome everyone',
      image: image17
    },
    {
      id: 18,
      title: 'Food for All Network',
      topic: 'Topic: Food Security & Hunger Relief',
      description: 'Food for All Network is a group dedicated to tackling hunger and food insecurity. We...',
      image: image18
    },
    {
      id: 19,
      title: 'Path of Dharma',
      topic: 'Topic: Hindu Practices and Teachings',
      description: 'This group discusses Hindu scriptures, yoga, meditation, and festivals like Diwali. Share insights on spirituality...',
      image: image19
    },
    {
      id: 20,
      title: 'Grace and Truth Fellowship',
      topic: 'Topic: Christian Faith and Worship',
      description: 'A peaceful space to explore the Bible, reflect on communion and prayer, and share experiences...',
        image: image20
    },
    {
      id: 21,
      title: 'Crescent Conversations',
      topic: 'Topic: Islamic Beliefs and Practices',
      description: 'Engage in discussions about the Quran, daily prayers, fasting during Ramadan, and acts of kindness...',
      image: image21
    },
    {
      id: 22,
      title: 'Lotus Mind Circle',
      topic: 'Topic: Buddhist Philosophy and Meditation',
      description: 'A group for exploring Buddhist teachings, meditative, and meditation techniques. Discuss ways to cultivate inner...',
      image: image22
    },
    {
      id: 23,
      title: 'Torah Wisdom Exchange',
      topic: 'Topic: Jewish Traditions and Teachings',
      description: 'A respectful space for sharing insights on the Torah, shabbat, and Jewish traditions. Celebrate the...',
      image: image23
    },
    {
      id: 24,
      title: 'Sacred Spirit Keepers',
      topic: 'Topic: Indigenous Spiritual Practices',
      description: 'Discuss sacred rituals, stories, and the deep connection between nature and spirituality. This group focuses...',
      image: image24
    },
    {
      id: 25,
      title: 'Sikh Sewa and Simran',
      topic: 'Topic: Sikh Values and Teachings',
      description: 'Explore the teachings of the Guru Granth Sahib and discuss the principles of Sewa (selfless...',
      image: image25
    },
    {
      id: 26,
      title: "Baha'i Unity Forum",
      topic: 'Topic: Oneness and World Peace',
      description: "Discuss the Baha'i teachings on unity, equality, and world peace. Share reflections on fostering harmony...",
      image: image26
    },
    {
      id: 27,
      title: 'Zoroastrian Flame Circle',
      topic: 'Topic: Zoroastrian Faith and Philosophy',
      description: 'A group to explore the teachings of Zoroastrianism, including truth (Asha) and good deeds. Share...',
      image: image27
    },
    {
      id: 28,
      title: 'Exploring Shinto Beliefs',
      topic: 'Topic: Shintoism and Nature Reverence',
      description: 'A group to explore the traditional Japanese religion of Shinto, focusing on kami (spirits), rituals...',
      image: image28
    },
    {
      id: 29,
      title: 'The Path of Tao',
      topic: 'Topic: Taoism: The Way and the Nature of Reality',
      description: 'A group for learning about Taoism, the ancient Chinese philosophy focused on living in harmony...',
      image: image29
    },
    {
      id: 30,
      title: 'The Wicca Circle',
      topic: 'Topic: Wicca and Pagan Spirituality',
      description: 'A space for people to discuss the principles of Wicca and other Pagan spiritual traditions...',
      image: image30
    },
    {
      id: 31,
      title: 'The Sufi Fellowship',
      topic: 'Topic: Sufism: Love and Mystical Connection',
      description: 'A group for those interested in the mystical traditions of Islam, particularly Sufism. Discuss the...',
      image: image31
    }
  ];

  return (
    <section className="discussions-section" id="discussions-section">
      <div className="discussions-header">
        <h2 className="fade-up">
          Join the latest conversations and insights.
          <span className="highlighted-text fade-up">✦ Latest Group Discussions</span>
        </h2>
      </div>

      <div className="discussions-grid">
        {discussions.map((discussion, index) => (
          <div 
            key={discussion.id} 
            className="discussion-card zoom-fade"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="discussion-image-container">
              <img src={discussion.image} alt={discussion.title} className="discussion-image" />
            </div>
            <div className="discussion-details">
              <h3>{discussion.title}</h3>
              <p className="discussion-topic">{discussion.topic}</p>
              <p className="discussion-description">{discussion.description}</p>
              <p className="learn-more">Learn More »</p>
              <button className="join-conversation">
                <span className="flex justify-center items-center gap-2">
                    Join Conversation
                    <img src={arrow} alt="arrow" className="arrow-icon" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupDiscussions;