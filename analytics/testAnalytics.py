import pandas as pd
import falcon

class testAnalytics:

    def getLocations(self, fileName):

        print("parsing file")
        df = pd.read_csv(fileName,delimiter = ',' , encoding = 'unicode_escape').dropna()
        locs = []

        for index, row in df[0:1000].iterrows():
            locs.append({'lat':row.Lat,'lng':row.Long})

        return locs

    def on_get(self, req, resp):


        data = self.getLocations('~/Desktop/crimes-in-boston/crime.csv')
        print("hello from inside Python")
        resp.media = data


api = falcon.API()
api.add_route('/crime_analytics/API/runPython', testAnalytics())
