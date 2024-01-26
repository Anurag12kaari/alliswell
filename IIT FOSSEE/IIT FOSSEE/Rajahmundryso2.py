import matplotlib.pyplot as plt
import pandas as pd

plt.style.use("dark_background")
data = pd.read_excel("Rajahmundry.xlsx")
plt.scatter(data.date, data["so2"], color="#0bd0f8")
plt.title("SO₂ stats ")
plt.xlabel("Year")
plt.ylabel("Amount of SO₂ in the Atmosphere")
plt.show()
