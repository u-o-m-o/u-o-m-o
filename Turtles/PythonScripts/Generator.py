# <https://www.twitch.tv/demyhanna/> lulli1
# <https://www.twitch.tv/demyhanna/> lulli1
# "demyhanna" lulli3
# <https://static-cdn.jtvnw.net/jtv_user_pictures/c01a9d9d-a00b-4fe5-ae7c-0f640abdb218-profile_image-70x70.jpeg> lulli4
# "Hello World" lulli5
# "Hearthstone" lulli6
# "All global" lulli7
# uomoprofile:Chronological_Order_new_to_old lulli8
# uomoprofile:Popularity_Order_Normal lullipop
# numberstat lulli9
# "https://www.twitch.tv/demyhanna" lullino1
# uomoprofile:Public lullino2
# "true" lullino3
# numberstat2 lulliz
# numberstat3 lullix
import names
from random import randint
from random_word import RandomWords


def creavariabiliacaso ():
    order = ['uomoprofile:Popularity_Order_Normal', 'uomoprofile:Chronological_Order_new_to_old','uomoprofile:Chronological_Order_Normal', 'uomoprofile:Alphabetical_Order_Normal', 'uomoprofile:Algorithmic_Order_Normal']
    privacy = ['uomoprofile:All_but_blocked_users', 'uomoprofile:Followers_Only', 'uomoprofile:Friends_of_a_friend', 'uomoprofile:Only_Users', 'uomoprofile:Private', 'uomoprofile:Public']
    username = names.get_first_name() + str(randint(80,95))
    category = ['Hearthstone', 'DOTA 2 Autochess', 'IRL', 'League of Legends', 'Fortnite', 'Cooking', 'Talkshow', 'The Sims 3', 'Other Content']
    optionemotes = ['All Global', 'Only Sub Emotes', 'No emotes']
    profile = '<https://www.twitch.tv/' + username + '/>'
    image = '<https://picsum.photos/200/300?image=' + str(randint(0,799)) + '>'
    stat1 = '' + str(randint(1,2000000))
    stat2 = '' + str(randint(1,200000))
    stat3 = '' + str(randint(1,200000))
    boolean = ['true','false']
    uri = 'https://www.twitch.tv/' + username + '/'
    title = username + ' Stream'
    realorder = order[randint(0,4)]
    realprivacy = privacy[randint(0,5)]
    realboolean = boolean[randint(0,1)]
    realcategory = category[randint(0,8)]
    realoption = optionemotes[randint(0,2)]
    realorder2 = order[randint(0,4)]
    finalist = list()
    finalist.append(username)
    finalist.append(profile)
    finalist.append(image)
    finalist.append(stat1)
    finalist.append(stat2)
    finalist.append(stat3)
    finalist.append(uri)
    finalist.append(realorder)
    finalist.append(realprivacy)
    finalist.append(realboolean)
    finalist.append(realcategory)
    finalist.append(title)
    finalist.append(realoption)
    finalist.append(realorder2)
    return finalist

#print(creavariabiliacaso())


#str = "this is string example....wow!!! this is really string"
#print str.replace("is", "was")

def sostituisciaprofusione(numerino):
    x = 0
    while x < numerino:
        stringhettyna = '@prefix uomoprofile: <http://uomodhdk.github.io/Ontology/uomoprofile.owl#> . \n@prefix foaf: <http://xmlns.com/foaf/0.1/> . \n@prefix time: <http://www.w3.org/2006/time> . \n@prefix terms: <http://purl.org/dc/terms/> . \n@prefix schema: <http://schema.org/> . \n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> . \n@prefix dc: <http://purl.org/dc/elements/1.1/> . \n@prefix sioc: <http://www.w3.org/2003/06/sw-vocab-status/ns#> . \n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> . \n@prefix : lulli1 . \n \n#User \n\n :user \n 	a sioc:UserAccount ; \n 	uomoprofile:creates lulli1 ; \n 	uomoprofile:has_nickname :nickname . \n\n \n	#Nickname \n\n  :nickname \n 	a uomoprofile:Nickname ; \n 	uomoprofile:is_nickname_of :user ; \n 	foaf:nick "lulli3"^^rdfs:Literal . \n\n \n	#ProfileImage \n\n lulli4 \n 	a uomoprofile:Profile_Media ; \n 	uomoprofile:is_main_media_of lulli1 . \n\n  \n	#VideoStream \n\n :videostream \n 	a uomoprofile:Highlighted_Media ; \n 	uomoprofile:is_main_media_of lulli1 ; \n 	uomoprofile:title "lulli5" ; \n 	uomoprofile:category "lulli6" . \n\n\n#Chat \n\n :chat \n 	a uomoprofile:Chat; \n 	uomoprofile:is_input_content_box_of lulli1; \n 	uomoprofile:allowed_emotes "lulli7" . \n 	\n\n#ContainerVideos \n\n :videos \n 	a uomoprofile:ContentContainer ; \n 	uomoprofile:has_displaying_order lulli8 ; \n 	uomoprofile:is_container_of lulli1 . \n 	\n 	\n#ContainerClips \n\n :clips \n	a uomoprofile:ContentContainer ; \n	uomoprofile:has_displaying_order lullipop ; \n	uomoprofile:is_container_of lulli1 . \n	\n	\n#ContainerEvents \n\n :events \n	a uomoprofile:ContentContainer ; \n	uomoprofile:is_container_of lulli1 . \n\n	\n#ContainerFollowers \n\n :followers \n	a uomoprofile:Followers ; \n 	uomoprofile:is_container_of lulli1 . \n\n	\n#ContainerFollowing \n\n :following \n	a uomoprofile:Following ;\n	uomoprofile:is_container_of lulli1 .\n\n	\n#ContainerPanel \n\n :panels \n	a uomoprofile:ContentContainer ; \n	uomoprofile:is_container_of lulli1 . \n\n\n#NofFollower \n\n :numberoffollower\n	a uomoprofile:Number_of_followers ;\n	uomoprofile:is_a_stat_of lulli1 ;\n	uomoprofile:value "lullix"^^xsd:nonNegativeInteger .\n\n	\n#NofFollowing\n\n :numberoffollowing\n	a uomoprofile:Number_of_following ;\n	uomoprofile:is_a_stat_of lulli1 ;\n	uomoprofile:value "lulliz"^^xsd:nonNegativeInteger .\n\n	\n#Views\n\n :views\n	a uomoprofile:Views ;\n	uomoprofile:is_a_stat_of lulli1 ;\n	uomoprofile:value "lulli9"^^xsd:nonNegativeInteger .\n	\n	\n#Profile\n\n :\n 	a uomoprofile:User_Profile;\n 	uomoprofile:uri "lullino1"^^xsd:anyURI ;\n 	uomoprofile:created_by :user ;\n 	uomoprofile:has_main_media lulli4, :videostream ;\n 	uomoprofile:has_input_content_box :chat ;\n 	uomoprofile:has_container :videos, :clips, :events, :followers, :following, :panels ;\n 	uomoprofile:has_stats :numberoffollwing, :numberoffollowers, :views ;\n 	uomoprofile:has_privacy lullino2 ;\n 	uomoprofile:shareable "lullino3"^^xsd:boolean .'
        lesostituzioni = creavariabiliacaso()
        stampetta = stringhettyna.replace('lulli1', lesostituzioni[1])
        stampetta1 =stampetta.replace('lulli3', lesostituzioni[0])
        stampetta2 =stampetta1.replace('lulli4', lesostituzioni[2])
        stampetta3 =stampetta2.replace('lulli5', lesostituzioni[11])
        stampetta4 =stampetta3.replace('lulli6', lesostituzioni[10])
        stampetta5 =stampetta4.replace('lulli7', lesostituzioni[12])
        stampetta6 =stampetta5.replace('lulli8', lesostituzioni[7])
        stampetta7 =stampetta6.replace('lullipop', lesostituzioni[13])
        stampetta8 =stampetta7.replace('lulli9', lesostituzioni[3])
        stampetta9 =stampetta8.replace('lullino1', lesostituzioni[6])
        stampetta10 =stampetta9.replace('lullino2', lesostituzioni[8])
        stampetta11 =stampetta10.replace('lullino3', lesostituzioni[9])
        stampetta12 =stampetta11.replace('lulliz', lesostituzioni[4])
        stampetta13 =stampetta12.replace('lullix', lesostituzioni[5])
        nome = 'twitch' + lesostituzioni[0]
        risultatoturtle = open(nome + ".ttl", "w+")
        risultatoturtle.write(stampetta13)
        x = x+1
    return x






