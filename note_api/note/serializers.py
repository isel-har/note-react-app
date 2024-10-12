from rest_framework.serializers import ModelSerializer
from .models import Note

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
    # def is_valid(self, raise_exception=False):
    #     valid = super().is_valid(raise_exception=raise_exception)
    #     print("validated data inside overriden function", self.data)
    #     return valid
