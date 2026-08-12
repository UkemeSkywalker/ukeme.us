/** Shape of a dev.to post once it has been trimmed down for the article cards. */
export type Article = {
  id: number;
  title: string;
  url: string;
  coverImage: string;
  description: string;
  publishedAt: string;
  readingMinutes: number;
  tags: string[];
};

export const DEV_TO_USERNAME = 'ukemzyskywalker';
export const DEV_TO_PROFILE_URL = `https://dev.to/${DEV_TO_USERNAME}`;
export const ARTICLE_COUNT = 6;

/**
 * Snapshot of the six most recent posts, rendered immediately on load and kept
 * if the live dev.to request fails, so the section is never empty.
 */
export const FALLBACK_ARTICLES: Article[] = [
    {
      "id": 3186544,
      "title": "How I Built a Fully Automated Ethereum PoW Faucet on AWS Using Terraform + Ansible",
      "url": "https://dev.to/aws-builders/one-script-to-rule-them-all-automating-ethereum-pow-faucets-on-aws-3p78",
      "coverImage": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fuhqv73ozw1wx1qd2p02b.jpg",
      "description": "Introduction   As I step into 2026, I made a deliberate decision to narrow my focus: Node...",
      "publishedAt": "2026-01-21T04:32:16Z",
      "readingMinutes": 7,
      "tags": [
        "automation",
        "aws",
        "blockchain"
      ]
    },
    {
      "id": 2791856,
      "title": "Building an AI-Powered IoT Analytics Pipeline on AWS: From Shoe Sensors to Predictive Insights",
      "url": "https://dev.to/aws-builders/building-an-ai-powered-iot-analytics-pipeline-on-aws-from-shoe-sensors-to-predictive-insights-13bg",
      "coverImage": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F6zr67iqad6p97b9zotdo.png",
      "description": "In the world of connected devices, turning raw sensor data into real-time insights requires a robust,...",
      "publishedAt": "2025-08-23T13:57:55Z",
      "readingMinutes": 3,
      "tags": [
        "ai",
        "aws",
        "machinelearning"
      ]
    },
    {
      "id": 2656929,
      "title": "How I Survived the Great Kubernetes Exodus: Migrating EKS Cluster from v1.26 to v1.33 on AWS",
      "url": "https://dev.to/aws-builders/how-i-survived-the-great-kubernetes-exodus-migrating-eks-cluster-from-v126-to-v133-on-aws-39ko",
      "coverImage": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0ukql3e9kcs0wcdhrap4.png",
      "description": "A comprehensive tale of migrating a production AWS Kubernetes cluster with 6000+ resources, 46 CRDs,...",
      "publishedAt": "2025-07-05T00:25:04Z",
      "readingMinutes": 14,
      "tags": [
        "aws",
        "kubernetes",
        "cloud"
      ]
    },
    {
      "id": 2242744,
      "title": "Django’s Game of Life Meets AWS ECS – The Ultimate Deployment Hack!",
      "url": "https://dev.to/aws-builders/djangos-game-of-life-meets-aws-ecs-the-ultimate-deployment-hack-2dha",
      "coverImage": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxt0j1fhji3t2li609wzl.jpg",
      "description": "Table of Contents            Introduction            Prerequisites            Project...",
      "publishedAt": "2025-01-29T23:54:23Z",
      "readingMinutes": 5,
      "tags": [
        "aws",
        "devops",
        "python"
      ]
    },
    {
      "id": 2216697,
      "title": "Automated Nginx and Fluentd Deployment on AWS EC2 using Ansible: A DevOps Guide",
      "url": "https://dev.to/aws-builders/automated-nginx-and-fluentd-deployment-on-aws-ec2-using-ansible-a-devops-guide-b5n",
      "coverImage": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frry3b8snydq2vcd7b2nb.jpg",
      "description": "Table of Content    Introduction   Brief overview of the problem: Managing web servers and logs at...",
      "publishedAt": "2025-01-19T17:27:43Z",
      "readingMinutes": 12,
      "tags": [
        "aws",
        "cloud",
        "devops"
      ]
    },
    {
      "id": 1753209,
      "title": "🚀 Unleashing the Power of Cloud Magic: Transforming a Lone AWS EC2 Instance into a K8s Powerhouse! 🌐🔥",
      "url": "https://dev.to/ukemzyskywalker/unleashing-the-power-of-cloud-magic-transforming-a-lone-aws-ec2-instance-into-a-k8s-powerhouse-75o",
      "coverImage": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F32a1oeb24feuesjievnr.png",
      "description": "Table of Content:    Prequisite Introduction SSH into EC2 Install Docker Install...",
      "publishedAt": "2024-02-07T09:27:55Z",
      "readingMinutes": 7,
      "tags": [
        "cloudnative",
        "aws",
        "devops"
      ]
    }
  ];
