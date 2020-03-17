package io.ktor.start.intellij

import org.jetbrains.kotlin.idea.caches.resolve.resolveToCall
import org.jetbrains.kotlin.psi.KtAnnotationEntry
import org.jetbrains.kotlin.psi.KtCallExpression
import org.jetbrains.kotlin.resolve.descriptorUtil.fqNameOrNull
import org.jetbrains.kotlin.resolve.lazy.BodyResolveMode
import org.jetbrains.kotlinx.serialization.compiler.resolve.toClassDescriptor

internal const val KTOR_LOCATIONS_ANNOTATION_FQNAME = "io.ktor.locations.Location"
internal const val KTOR_ROUTING_FQNAME = "io.ktor.routing.routing"

internal fun KtAnnotationEntry.isLocation(): Boolean = resolveToCall(BodyResolveMode.PARTIAL)
    ?.candidateDescriptor
    ?.returnType
    ?.toClassDescriptor
    ?.fqNameOrNull()
    ?.asString() == KTOR_LOCATIONS_ANNOTATION_FQNAME

internal fun KtCallExpression.isRouteingInvocation(): Boolean = resolveToCall(BodyResolveMode.PARTIAL)
    ?.candidateDescriptor
    ?.fqNameOrNull()
    ?.asString() == KTOR_ROUTING_FQNAME
