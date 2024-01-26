import matplotlib.pyplot as plt
import pandas as pd

plt.style.use("dark_background")
data = pd.read_excel("Kakinada.xlsx")
plt.scatter(data.date, data["no2"], color="#0bd0f8")
plt.title("NO₂ stats")
plt.xlabel("Year")
plt.ylabel("NO₂ in the Atmosphere")
plt.show()
