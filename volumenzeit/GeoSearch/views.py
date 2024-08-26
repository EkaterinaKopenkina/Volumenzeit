from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from geopy.geocoders import Nominatim

class SimilarLocationAPIView(APIView):
    """
    API view for finding similar locations based on a query.
    """
    def get(self, request, format=None):
        query_location = request.query_params.get('location')
        if not query_location:
            return Response(
                {"error": "Please provide a location query."},
                status=status.HTTP_400_BAD_REQUEST
            )
        geolocator = Nominatim(user_agent="my_geocoder")
        try:
            locations = geolocator.geocode(query_location, exactly_one=False, language="en", limit=5)
            if locations:
                location_names = [loc.address for loc in locations]
                return Response([{"name": name} for name in location_names])
        except Exception as e:
            return Response(
                {"error": f"Error processing the request: {e}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        return Response([], status=status.HTTP_200_OK)