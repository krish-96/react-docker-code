pipeline{
    agent any
    stages{
        stage("clone"){
            steps{
                echo "Cloning the code..."
                git branch: 'master', url: 'https://github.com/krish-96/react-docker-code.git'
                echo "Code Cloning is Done"
            }
        }
        stage("Building Image"){
            steps{
                echo "Building the Image..."
                //sh "docker rm -f react-docker-container"
                //sh "docker run -it --name react-docker-container-${BUILD_NUMBER} -p 9999:3000 -d react-docker-container-${BUILD_NUMBER}:${BUILD_NUMBER}"

                sh "docker login -u gopikrishnabelamkonda -p dckr_pat_y71BdDJ7R5txZ-vSDVdE_WGev3Y"
                sh "docker build -t gopikrishnabelamkonda/react-docker-hub:react-docker-container-${BUILD_NUMBER} ."
                sh "docker push gopikrishnabelamkonda/react-docker-hub:react-docker-container-${BUILD_NUMBER}"
                // sh "docker run -it --name react-docker-container-${BUILD_NUMBER} -p 9999:3000 -d gopikrishnabelamkonda/react-docker-hub:react-docker-container-${BUILD_NUMBER}"
                
                echo "Building the Image is Done."
            }
        }
        stage("Pulling Docker image"){
            steps{
                echo "Pulling Docker image..."
                sh "docker login -u gopikrishnabelamkonda -p dckr_pat_y71BdDJ7R5txZ-vSDVdE_WGev3Y"
                sh "docker pull gopikrishnabelamkonda/react-docker-hub:react-docker-container-${BUILD_NUMBER}"
                sh "docker run -it --name react-docker-container-${BUILD_NUMBER} --network host -d gopikrishnabelamkonda/react-docker-hub:react-docker-container-${BUILD_NUMBER}"
                echo "Pulling Docker image is done."
            }
        }
        stage("Test"){
            steps{
                echo "Running Tests..."
            }
        }
    }
}