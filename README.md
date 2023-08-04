
# Colby Trash Deletion App (React) 🗑️ 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

Marine debris presents substantial ecological challenge to the ecosystem of Maine's islands where volunteer groups annually undertake cleanup initiatives on islands. These cleanup efforts hindered by unpredictable challenges in trash volume and placement. In this web app, we created a pipeline that leverages aerial drones and machine learning to automatically detect, classify, and map marine trash.

This repisitory is largely the same as this [Trash-Detection-App](https://github.com/RayWang0328/Trash-Detection-App/), but the frontend is built with React.js instead of HTML/CSS. The project structure and installation is slightly different. 


## Project overview 🔎
* 🗃️ Dataset: Drone footage from Tim Stonesifer & Dr. Whitney King
* 🕵🏻 Trash Detection: [Grounding DINO](https://github.com/IDEA-Research/GroundingDINO)
* 🖐 Trash Classification: [OpenAI CLIP](https://github.com/openai/CLIP)
* 🚮 Remove Duplicate Trash: [SIFT](https://docs.opencv.org/4.x/da/df5/tutorial_py_sift_intro.html)
* 🗺️ Trash Visualization: [Folium Library](https://python-visualization.github.io/folium/)
* 🌐 Web App: React, Flask 

For more information, refer to [Presentation](https://docs.google.com/presentation/d/1rI7PSf180x29OTPDD2gRQmT9HyvPoCecKxQgDgZoxtc/edit?usp=sharing). Paper is coming soon! 

# Paper 📄
Still working on it ⚙️


# Demo 

https://github.com/RayWang0328/Colby-Trash-App/assets/19866871/f9c72a17-f664-4ac9-9043-45be41a96a5e

# Local Installation 🛠️ 

## Clone Repository onto a folder on your local machine

Open Terminal on your machine:
```
git clone https://github.com/RayWang0328/React-Trash-Detection-App
```
Change Directory into the folder:
```
cd React-Trash-Detection-App
```


## Back End Configuration 


### 0. CPU or GPU
It is advisable to run this program on your local machine only if you have a GPU that is CUDA compatible. The reason for this is because the models used in this app are pretty heavy, computationally. 

If you do have a CUDA compatible GPU, make sure its activated by running this inside the `backend` folder after installing everything and activating the virtual environment:
```python
>>> python
>>> import torch
>>> torch.cuda.is_available()
```

If CUDA is properly set up, the above should print `True`

If you receive a `NameError: name '_C' is not defined` error, refer to this [support ticket](https://github.com/IDEA-Research/GroundingDINO/issues/8#issuecomment-1541892708). 

If you get any more trouble from Grounding DINO, its usually because of CUDA. Refer to their [documentation](https://github.com/IDEA-Research/GroundingDINO) for more support. The usual problem is from Grounding DINO

### 1. Change Directory into folder and activate virtual environment

**For Windows Users:**

```
cd backend
py -3 -m venv .venv
.venv\Scripts\activate
```

**For Mac Users:**

```
cd backend
python3 -m venv .venv
. .venv/bin/activate
```

### 2. Install Required Libraries 
```
pip install -r requirements.txt
```
```
python -m pip install scipy
```
### 3. Install GroundingDINO libraries
```
git clone https://github.com/IDEA-Research/GroundingDINO.git
```
```
cd GroundingDINO/
```
### 4. Install Grounding DINO dependencies:
```
pip install -e .
cd ..
```

### 5. Download GroundingDINO weights

For this step, you will need to have wget installed. You will be able to install it from [here](https://gnuwin32.sourceforge.net/packages/wget.htm)
```
mkdir weights
cd weights
wget -q https://github.com/IDEA-Research/GroundingDINO/releases/download/v0.1.0-alpha/groundingdino_swint_ogc.pth
cd ..
```
### 6. Run Application: 
```
python app.py
```

## Front End Configuration
Change Directory into frontend:
```
cd frontend
```
Install the packages 📦
```
yarn install
```
To start the applcation, run:
```
npm start dev
```

The front end will only run if the backend is running. Everytime you need to run the app, you have to run `python app.py` in one terminal and `npm start dev` in another. Only when both ends are running will the program work.  
