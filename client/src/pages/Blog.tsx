import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Personalized Learning",
    content: "Personalized learning tailors educational experiences to individual student needs, improving engagement and academic success. By leveraging technology and adaptive learning methods, students can learn at their own pace, making education more effective and enjoyable."
  },
  {
    id: 2,
    title: "Top Study Techniques for Students",
    content: "Effective study strategies include active recall, spaced repetition, and the Pomodoro technique. These methods help students retain information better, reduce stress, and maximize productivity. Implementing these strategies can significantly improve academic performance."
  },
  {
    id: 3,
    title: "The Future of Online Education",
    content: "Online education is evolving rapidly with advancements in AI, VR, and interactive learning platforms. Future trends indicate a shift towards hybrid learning models, microlearning, and personalized AI-driven tutoring, making education more accessible and flexible."
  },
  {
    id: 4,
    title: "How to Stay Motivated While Studying",
    content: "Staying motivated while studying requires setting clear goals, maintaining a study schedule, and incorporating rewards. Creating an inspiring study environment and taking regular breaks can help maintain focus and prevent burnout."
  },
  {
    id: 5,
    title: "Benefits of Interactive Learning",
    content: "Interactive learning, through quizzes, discussions, and hands-on activities, enhances student engagement and comprehension. Studies show that students retain information better when they actively participate in the learning process."
  },
  {
    id: 6,
    title: "Choosing the Right Career Path",
    content: "Selecting a career path involves self-assessment, researching potential industries, and seeking mentorship. Understanding personal strengths and market demands can lead to a fulfilling and successful career choice."
  },
  {
    id: 7,
    title: "The Impact of AI in Education",
    content: "Artificial Intelligence is transforming education by providing personalized learning experiences, automating administrative tasks, and enhancing engagement. AI-powered tutors and smart content creation are shaping the future of learning."
  },
  {
    id: 8,
    title: "How to Improve Concentration While Studying",
    content: "Techniques such as meditation, proper sleep, and a distraction-free environment can significantly enhance concentration. Practicing mindfulness and deep work strategies can help students stay focused for extended periods."
  },
  {
    id: 9,
    title: "Developing Critical Thinking Skills",
    content: "Critical thinking is an essential skill for students and professionals. Engaging in problem-solving activities, questioning assumptions, and analyzing different perspectives can strengthen one's ability to think critically."
  },
  {
    id: 10,
    title: "Time Management Tips for Students",
    content: "Effective time management involves prioritizing tasks, using planners, and setting deadlines. Avoiding procrastination and breaking tasks into smaller steps can improve efficiency and academic success."
  }
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">Blog</h1>
      <p className="text-center text-gray-600 mb-8">
        Explore in-depth insights, practical tips, and expert advice on education and learning.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="p-4 shadow-md hover:shadow-lg transition-shadow">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
