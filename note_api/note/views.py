from .models import Note
from .serializers import NoteSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response



@api_view(['GET'])
def notelist(request):
    notes = Note.objects.all().order_by('created_at')
    data = NoteSerializer(instance=notes, many=True).data
    return Response({'data' : data})


@api_view(['GET', 'PUT', 'DELETE'])
def noteview(request, id):

    try:
        if request.method == 'GET':
            note = Note.objects.get(id=id)
            serialize = NoteSerializer(instance=note)
            return Response({'data':serialize.data})

        if request.method == 'PUT':
            data = request.data
            serialize = NoteSerializer(data=data)
            if serialize.is_valid():
                Note.objects.filter(id=id).update(**data)
                return Response({'data': data})
        else:
            Note.objects.filter(id=id).delete()
            return Response({'messagge': 'note delelted'})
    except:
        return Response({'error' : 'operation failed'}, status=400)



@api_view(['POST'])
def createnote(request):
    try:
        serialize = NoteSerializer(data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response({'data': serialize.data}, status=201)
        return Response({'error': 'invalid data.'}, status=400)
    except:
        return Response({'error': 'invalid data.'}, status=400)

