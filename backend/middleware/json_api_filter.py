import re

class CleanUpMiddleware(object):
    def process_request(self, request):
        request.GET = request.GET.copy()

        filtersDict = {}
        for key in request.GET:
            if key.startswith('filter['):
                match = re.match(
                    r'filter\[(.*?)\].*',
                    key)
                filtersDict[match.group(1)] = request.GET[key]

        request.GET.update(filtersDict)

        return None
