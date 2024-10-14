from .models import Note
from .serializers import NoteSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response



@api_view(['GET'])
def notelist(request):
    try:
        notes = Note.objects.all().order_by('updated_at')
        data = NoteSerializer(instance=notes, many=True).data
        return Response(data)
    except:
        return Response({'error' : "operation failed."}, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def noteview(request, id):

    try:
        if request.method == 'GET':
            note = Note.objects.get(id=id)
            serialize = NoteSerializer(instance=note)
            return Response(serialize.data)

        if request.method == 'PUT':
            Note.objects.filter(id=id).update(body=request.data['body'])
            return Response({'message' : 'note updated'})  
        else:
            Note.objects.filter(id=id).delete()
            return Response({'message': 'note deleted'})
    except:
        return Response({'error' : 'operation failed'}, status=400)


@api_view(['POST'])
def createnote(request):
    try:
        serialize = NoteSerializer(data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response({'message':'note created'}, status=201)
        return Response({'error': 'invalid data.'}, status=400)
    except:
        return Response({'error': 'invalid data.'}, status=400)

